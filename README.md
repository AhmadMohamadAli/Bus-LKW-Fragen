# Bus & LKW Fragenkatalog

**English** | [Deutsch](README.de.md)

A lightweight, static web app for practicing the German driving licence theory questions for **bus and truck classes** (C1, C1E, C, CE / D1, D1E, D, DE). It runs entirely in the browser, with no backend and no build step.

The interface mixes German (questions and answers) and Arabic (UI labels), and it includes **German text-to-speech** so questions and answers can be listened to as well as read.

**Live site:** https://expatnetwork.online/

## Features

- **Practice mode:** go through all questions in order and get instant feedback (correct and incorrect answers are highlighted).
- **Exam mode:** 30 random questions with a 30-minute countdown. A score of 80% or more counts as passed. At the end you get a result summary and an analysis of every mistake.
- **Shuffled answers:** the order of the answer options is randomized every time, and the correct answer is tracked automatically.
- **Search and quick jump:** find a question by its ID or by a keyword, or jump to any question from a grid.
- **German audio ("Vorlesen"):**
  - Natural neural voice using pre-generated MP3 files (see [Audio](#audio)).
  - Automatic fallback to the browser's built-in `SpeechSynthesis` voice if an MP3 file is missing.
  - Voice picker for the fallback voice, with the best available German voice selected automatically.
  - Optional auto-read: every question and its answers are read aloud as you navigate.
- **Dark / light theme.**
- **Responsive layout** for phones, tablets and desktops.

## Project structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js          # question data + all app logic
├── audio/                 # generated, see "Audio"
│   ├── manifest.js        # maps each text to its MP3 file
│   └── *.mp3
└── generate_audio.py      # generates the audio files
```

## Getting started

No installation is needed. Serve the folder with any static web server, for example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

Opening `index.html` directly from disk also works, but some browsers restrict speech and storage features on `file://`, so a local server is recommended.

## Audio

Browser voices differ a lot between devices, so the app can use pre-generated MP3 files with a consistent, natural German voice.

1. Install the dependency (use the same Python you will run the script with):

   ```bash
   python -m pip install edge-tts
   ```

2. Run the generator from the project root (the folder that contains `js/script.js`):

   ```bash
   python generate_audio.py
   ```

   Useful options:

   ```bash
   python generate_audio.py --dry-run   # only count the texts, generate nothing
   ```

   The script:
   - reads every question and answer from `js/script.js`,
   - generates one MP3 per **unique** text (repeated answers share a file),
   - skips files that already exist, so it can be stopped and resumed,
   - writes `audio/manifest.js`, a lookup table from text to file name.

3. Make sure `index.html` loads the manifest **before** the main script:

   ```html
   <script src="./audio/manifest.js"></script>
   <script src="./js/script.js"></script>
   ```

4. Deploy the whole `audio/` folder together with the rest of the site.

You can change the voice and speed at the top of `generate_audio.py`:

```python
VOICE = "de-DE-KatjaNeural"   # e.g. de-DE-ConradNeural for a male voice
RATE = "-5%"                  # "+0%" normal, "-10%" slower
```

Run `edge-tts --list-voices` to see all available voices.

If `audio/manifest.js` is missing or a file is not found, the app silently falls back to the browser's speech synthesis.

### Tips for better browser voices (fallback)

| Browser / device | Best German voice |
|---|---|
| Edge (Windows / macOS) | Microsoft Katja or Conrad Online (Natural) |
| Chrome | Google Deutsch |
| iPhone / iPad | Settings → Accessibility → Spoken Content → Voices → Deutsch → download an Enhanced / Premium voice |
| Android | Settings → Text-to-speech → Google engine → install German voice data |

## Adding or editing questions

Questions live in the `originalQuestions` array at the top of `js/script.js`:

```js
{
    id: 1,
    ziffer: "1a",
    klasse: "C1, C1E, C, CE / D1, D1E, D, DE",
    frage: "In welchem Drehzahlbereich des Motors fährt man mit den besten Verbrauchswerten?",
    options: [
        "Bei Leerlaufdrehzahl",
        "Im am Drehzahlmesser gelb gekennzeichneten Bereich",
        "Im am Drehzahlmesser rot gekennzeichneten Bereich",
        "Im am Drehzahlmesser grün gekennzeichneten Bereich"
    ],
    correctIndex: 3
}
```

`correctIndex` is the zero-based index of the correct option in `options`. After changing questions, run `generate_audio.py` again. Only the new texts will be generated.

## Deployment

Upload the following to any static host (GitHub Pages, Netlify, shared hosting, etc.):

- `index.html`
- `css/`
- `js/`
- `audio/` (if you want the MP3 voice)

If the site is behind a CDN or cache, clear the cache after updating files. Paths are case-sensitive on most servers, so keep the folder names in lowercase.

## Tech stack

- Plain HTML, CSS and JavaScript (no framework, no build tools)
- [Font Awesome](https://fontawesome.com/) and Google Fonts (Inter, Cairo) via CDN
- Web Speech API (`SpeechSynthesis`) as a fallback voice
- [`edge-tts`](https://github.com/rany2/edge-tts) (Python) to generate the audio files

## Disclaimer

This is an independent practice tool and is not affiliated with or endorsed by any official examination authority. Always check the official question catalogue and current regulations before taking your exam.
