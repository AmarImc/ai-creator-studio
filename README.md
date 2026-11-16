# AI Creator Studio – iPhone Phase 1

Statische, touchoptimierte 3D-Web-App. Enthält neun anklickbare Arbeitsplätze, Kamerasteuerung und ehrliche Statusanzeigen. **Keine KI-Agenten, keine Videoverarbeitung, kein Backend in Phase 1.**

## Ausschließlich mit dem iPhone veröffentlichen

1. Auf dem iPhone in Safari github.com öffnen und ein kostenloses Konto anmelden oder erstellen.
2. Neues **öffentliches** Repository `ai-creator-studio` erstellen. (Öffentlich bedeutet: Der Quellcode ist einsehbar; keine privaten Videos hochladen.)
3. Die Dateien `index.html` und `manifest.webmanifest` über **Add file → Upload files** hochladen. Bei Bedarf Safari → „Desktop-Website anfordern“ verwenden. Alternativ Dateien einzeln über „Create new file“ anlegen.
4. Im Repository unter **Settings → Pages** bei **Build and deployment** `Deploy from a branch`, Branch `main`, Ordner `/(root)` auswählen und speichern.
5. Die unter Pages angezeigte HTTPS-Adresse auf dem iPhone öffnen.
6. Safari → Teilen → **Zum Home-Bildschirm**.

Internet ist nötig, da Three.js per esm.sh geladen wird. Für eine spätere robuste Offline-Nutzung werden Bibliotheken gebündelt. GitHub Pages hostet nur die Benutzeroberfläche, **keine** Videoverarbeitung oder vertrauliche Uploads.

## Funktionen
- 3D-Raum mit neun Stationen
- Ein-Finger-Drehung, Zwei-Finger-Zoom
- Mitarbeiter antippen, Details ansehen
- Keine erfundenen Arbeitsfortschritte

## Nächste Phase
Cloud-Backend, Authentifizierung, persistierte Projekte und echte Job-Statusdaten.
