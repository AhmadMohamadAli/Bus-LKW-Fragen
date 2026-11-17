# Bus & LKW Fragenkatalog

[English](README.md) | **Deutsch**

Eine schlanke, statische Web-App zum Üben der theoretischen Prüfungsfragen für die **Führerscheinklassen Bus und LKW** (C1, C1E, C, CE / D1, D1E, D, DE). Sie läuft komplett im Browser, ohne Backend und ohne Build-Schritt.

Die Oberfläche mischt Deutsch (Fragen und Antworten) und Arabisch (Beschriftungen). Dazu gibt es eine **deutsche Sprachausgabe**, damit Fragen und Antworten nicht nur gelesen, sondern auch angehört werden können.

**Live-Version:** https://expatnetwork.online/

## Funktionen

- **Übungsmodus:** Alle Fragen der Reihe nach durchgehen, mit sofortigem Feedback (richtige und falsche Antworten werden markiert).
- **Prüfungsmodus:** 30 zufällige Fragen mit 30 Minuten Zeitlimit. Ab 80 % gilt die Prüfung als bestanden. Am Ende gibt es eine Ergebnisübersicht mit Fehleranalyse.
- **Gemischte Antworten:** Die Reihenfolge der Antwortmöglichkeiten wird jedes Mal zufällig gemischt, die richtige Antwort wird automatisch mitgeführt.
- **Suche und Schnellsprung:** Fragen per ID oder Stichwort finden oder über ein Raster direkt zu jeder Frage springen.
- **Deutsche Sprachausgabe („Vorlesen“):**
  - Natürliche neuronale Stimme über vorab erzeugte MP3-Dateien (siehe [Audio](#audio)).
  - Automatischer Rückfall auf die eingebaute `SpeechSynthesis`-Stimme des Browsers, falls eine MP3-Datei fehlt.
  - Stimmenauswahl für die Ersatzstimme; die beste verfügbare deutsche Stimme wird automatisch gewählt.
  - Optionales automatisches Vorlesen: Jede Frage und ihre Antworten werden beim Blättern vorgelesen.
- **Dunkles / helles Design.**
- **Responsives Layout** für Smartphones, Tablets und Desktop.

## Projektstruktur

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js          # Fragendaten + gesamte App-Logik
├── audio/                 # wird erzeugt, siehe „Audio“
│   ├── manifest.js        # ordnet jedem Text seine MP3-Datei zu
│   └── *.mp3
└── generate_audio.py      # erzeugt die Audiodateien
```

## Erste Schritte

Eine Installation ist nicht nötig. Den Ordner mit einem beliebigen statischen Webserver ausliefern, zum Beispiel:

```bash
python -m http.server 8000
```

Danach http://localhost:8000 öffnen.

`index.html` direkt von der Festplatte zu öffnen funktioniert ebenfalls, aber manche Browser schränken Sprach- und Speicherfunktionen bei `file://` ein. Ein lokaler Server wird daher empfohlen.

## Audio

Die Stimmen im Browser unterscheiden sich je nach Gerät stark. Deshalb kann die App vorab erzeugte MP3-Dateien mit einer einheitlichen, natürlichen deutschen Stimme verwenden.

1. Abhängigkeit installieren (mit derselben Python-Version, mit der das Skript später läuft):

   ```bash
   python -m pip install edge-tts
   ```

2. Generator im Projektstamm ausführen (dem Ordner, der `js/script.js` enthält):

   ```bash
   python generate_audio.py
   ```

   Nützliche Option:

   ```bash
   python generate_audio.py --dry-run   # Texte nur zählen, nichts erzeugen
   ```

   Das Skript:
   - liest alle Fragen und Antworten aus `js/script.js`,
   - erzeugt pro **einzigartigem** Text eine MP3-Datei (wiederholte Antworten teilen sich eine Datei),
   - überspringt bereits vorhandene Dateien und kann daher jederzeit gestoppt und fortgesetzt werden,
   - schreibt `audio/manifest.js`, eine Zuordnungstabelle von Text zu Dateiname.

3. Sicherstellen, dass `index.html` das Manifest **vor** dem Hauptskript lädt:

   ```html
   <script src="./audio/manifest.js"></script>
   <script src="./js/script.js"></script>
   ```

4. Den gesamten Ordner `audio/` zusammen mit der restlichen Seite bereitstellen.

Stimme und Geschwindigkeit lassen sich am Anfang von `generate_audio.py` ändern:

```python
VOICE = "de-DE-KatjaNeural"   # z. B. de-DE-ConradNeural für eine männliche Stimme
RATE = "-5%"                  # "+0%" normal, "-10%" langsamer
```

Mit `edge-tts --list-voices` werden alle verfügbaren Stimmen angezeigt.

Fehlt `audio/manifest.js` oder wird eine Datei nicht gefunden, greift die App automatisch auf die Sprachsynthese des Browsers zurück.

### Tipps für bessere Browser-Stimmen (Ersatzstimme)

| Browser / Gerät | Beste deutsche Stimme |
|---|---|
| Edge (Windows / macOS) | Microsoft Katja oder Conrad Online (Natural) |
| Chrome | Google Deutsch |
| iPhone / iPad | Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Deutsch → eine erweiterte / Premium-Stimme laden |
| Android | Einstellungen → Text-in-Sprache-Ausgabe → Google-Engine → deutsche Sprachdaten installieren |

## Fragen hinzufügen oder ändern

Die Fragen stehen im Array `originalQuestions` am Anfang von `js/script.js`:

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

`correctIndex` ist der nullbasierte Index der richtigen Antwort in `options`. Nach Änderungen an den Fragen `generate_audio.py` erneut ausführen. Es werden nur die neuen Texte erzeugt.

## Bereitstellung

Folgendes auf einen beliebigen statischen Host hochladen (GitHub Pages, Netlify, Shared Hosting usw.):

- `index.html`
- `css/`
- `js/`
- `audio/` (falls die MP3-Stimme genutzt werden soll)

Liegt die Seite hinter einem CDN oder Cache, nach dem Aktualisieren den Cache leeren. Pfade unterscheiden auf den meisten Servern zwischen Groß- und Kleinschreibung, daher die Ordnernamen klein schreiben.

## Technik

- Reines HTML, CSS und JavaScript (kein Framework, keine Build-Tools)
- [Font Awesome](https://fontawesome.com/) und Google Fonts (Inter, Cairo) über CDN
- Web Speech API (`SpeechSynthesis`) als Ersatzstimme
- [`edge-tts`](https://github.com/rany2/edge-tts) (Python) zum Erzeugen der Audiodateien

## Haftungsausschluss

Dies ist ein unabhängiges Übungswerkzeug und steht in keiner Verbindung zu einer offiziellen Prüfungsstelle und wird von dieser nicht unterstützt. Vor der Prüfung bitte immer den offiziellen Fragenkatalog und die aktuellen Vorschriften prüfen.
