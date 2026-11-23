#!/usr/bin/env python3
"""
يولّد ملفات MP3 بصوت ألماني عصبي لكل سؤال وكل جواب في script.js
التشغيل (من مجلد الموقع، حيث يوجد js/script.js):

    pip install edge-tts
    python generate_audio.py              # توليد كل شيء
    python generate_audio.py --dry-run    # عدّ النصوص فقط بدون توليد

الناتج:
    audio/*.mp3        ملف لكل نص (النصوص المكررة تُولَّد مرة وحدة)
    audio/manifest.js  خريطة نص -> ملف، يقرأها الموقع
السكربت بيتخطى الملفات الموجودة، فتقدر توقفه وتكمّل لاحقاً.
"""
import asyncio, hashlib, json, re, sys
from pathlib import Path

VOICE = "de-DE-KatjaNeural"   # بدائل: de-DE-ConradNeural (رجل)، de-DE-SeraphinaMultilingualNeural، de-DE-FlorianMultilingualNeural
RATE = "+0%"                  # السرعة: "+0%" عادي، "-10%" أبطأ
CONCURRENCY = 6
SCRIPT = Path(sys.argv[1]) if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else Path("js/script.js")
OUT = Path("audio")


def load_questions(path: Path):
    src = path.read_text(encoding="utf-8")
    m = re.search(r"const originalQuestions\s*=\s*(\[.*?\])\s*;", src, re.S)
    if not m:
        sys.exit("ما لقيت originalQuestions في " + str(path))
    txt = m.group(1)
    txt = re.sub(r'([{,]\s*)(id|ziffer|klasse|frage|options|correctIndex)\s*:', r'\1"\2":', txt)
    txt = re.sub(r',\s*([}\]])', r'\1', txt)
    return json.loads(txt)


def fname(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:12] + ".mp3"


async def generate(sem, text, path):
    import edge_tts
    async with sem:
        for attempt in range(4):
            try:
                tmp = path.with_suffix(".tmp")
                await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(tmp))
                tmp.replace(path)
                return True
            except Exception as e:
                print(f"  retry {attempt+1}: {e}")
                await asyncio.sleep(2 * (attempt + 1))
        return False


async def main():
    questions = load_questions(SCRIPT)
    texts = set()
    max_opts = 0
    for q in questions:
        texts.add(q["frage"].strip())
        for o in q["options"]:
            texts.add(o.strip())
        max_opts = max(max_opts, len(q["options"]))
    for i in range(1, max_opts + 1):
        texts.add(f"Antwort {i}.")

    todo = {t: fname(t) for t in texts}
    print(f"{len(questions)} Fragen, {len(todo)} einzigartige Texte")
    if "--dry-run" in sys.argv:
        return

    OUT.mkdir(exist_ok=True)
    missing = [(t, OUT / f) for t, f in todo.items() if not (OUT / f).exists()]
    print(f"{len(missing)} Dateien zu generieren ({len(todo) - len(missing)} schon vorhanden)")

    sem = asyncio.Semaphore(CONCURRENCY)
    done = 0
    failed = []

    async def job(t, p):
        nonlocal done
        ok = await generate(sem, t, p)
        done += 1
        if not ok:
            failed.append(t)
        if done % 25 == 0 or done == len(missing):
            print(f"  {done}/{len(missing)}")

    await asyncio.gather(*(job(t, p) for t, p in missing))

    mapping = {t: f for t, f in todo.items() if (OUT / f).exists()}
    (OUT / "manifest.js").write_text(
        "const AUDIO_MAP = " + json.dumps(mapping, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"manifest.js: {len(mapping)} Einträge")
    if failed:
        print(f"{len(failed)} fehlgeschlagen - Skript einfach nochmal starten")


asyncio.run(main())