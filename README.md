# Coaching Fabio Gallo - Website

Professionelle Website für Coaching-Dienstleistungen nach dem St. Galler Coaching Modell.

## Projektübersicht

Dies ist eine statische Website mit HTML, CSS und JavaScript, optimiert für mobile Geräte und moderne Browser.

### Technologie-Stack
- **HTML5** - Semantisches Markup
- **CSS3** - Custom Properties, Flexbox, Grid
- **Vanilla JavaScript** - Keine Frameworks
- **Mobile-First** - Responsive Design

## Projektstruktur

```
homepage-2/
├── index.html              # Startseite
├── css/
│   ├── styles.css         # Hauptstile, Farben, Typography
│   ├── components.css     # Wiederverwendbare Komponenten
│   └── responsive.css     # Media Queries, Mobile-First
├── js/
│   ├── main.js           # Navigation, Interaktionen
│   └── contact-form.js   # Formular-Validierung
├── pages/
│   ├── ueber-mich.html
│   ├── coaching-modell.html
│   ├── coaching-vs-therapie.html
│   ├── fuer-wen.html
│   ├── ablauf.html
│   ├── angebot.html
│   └── referenzen.html
└── README.md
```

## Features

### ✅ Implementiert

1. **Responsive Design**
   - Mobile-First Ansatz
   - Optimiert für Smartphones, Tablets und Desktop
   - Touch-friendly Interaktionen

2. **Navigation**
   - Sticky Header
   - Mobile Hamburger-Menü
   - Smooth Scrolling
   - Aktive Link-Hervorhebung

3. **8 Seiten**
   - Homepage mit Hero-Section
   - Über mich (als Mensch & als Coach)
   - St. Galler Coaching Modell
   - Coaching vs. Therapie
   - Für wen ist Coaching geeignet
   - Coaching-Ablauf
   - Angebot & Preise
   - Referenzen

4. **Kontaktformular**
   - Client-seitige Validierung
   - Email & Telefon-Validierung
   - Spam-Schutz (Honeypot)
   - Barrierefreie Fehlermeldungen

5. **Design**
   - Light Blue Farbschema (basierend auf Logo)
   - CSS-basiertes Logo
   - Moderne Komponenten (Cards, Buttons, etc.)
   - Accessibility Features

## Nächste Schritte

### 📸 Bilder hinzufügen
Ersetzen Sie die Platzhalter mit echten Fotos:
- Hero-Bild auf der Startseite
- Persönliches Foto auf "Über mich"
- Optional: Weitere Bilder für die Seiten

### ✍️ Inhalte anpassen
- Persönliche Informationen einfügen
- Preise auf der Angebot-Seite ergänzen (aktuell: [Preis])
- Echte Referenzen hinzufügen (aktuell: Platzhalter)
- Kontaktdaten vervollständigen

### 🔧 Backend-Integration
Das Kontaktformular funktioniert aktuell nur client-seitig. Für echte E-Mail-Versendung:

**Option 1: Formular-Service verwenden**
- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Web3Forms](https://web3forms.com)

**Option 2: Eigenes Backend**
- PHP-Script auf dem Server
- Node.js API
- Serverless Function (z.B. Netlify/Vercel)

Beispiel in `js/contact-form.js` (Zeile 200+) kommentiert.

### 📄 Rechtliche Seiten
Erstellen Sie:
- Impressum
- Datenschutzerklärung

### 🎨 Weitere Anpassungen
- Logo als SVG-Datei einbinden (aktuell: CSS-generiert)
- Favicon hinzufügen
- OpenGraph-Tags für Social Media
- Google Analytics (optional)

## Installation & Deployment

### Lokal testen
1. Öffnen Sie `index.html` in einem Browser
2. Oder verwenden Sie einen lokalen Server:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js (mit http-server)
   npx http-server
   ```

### Deployment-Optionen

**Option 1: Netlify (empfohlen)**
1. Erstellen Sie ein [Netlify](https://netlify.com) Konto
2. Drag & Drop den kompletten Ordner
3. Fertig! Ihre Website ist live

**Option 2: Traditional Hosting**
1. Laden Sie alle Dateien via FTP hoch
2. Stellen Sie sicher, dass `index.html` im Root liegt

**Option 3: GitHub Pages**
1. Erstellen Sie ein GitHub Repository
2. Pushen Sie den Code
3. Aktivieren Sie GitHub Pages in den Settings

## Browser-Unterstützung

- ✅ Chrome (letzte 2 Versionen)
- ✅ Firefox (letzte 2 Versionen)
- ✅ Safari (letzte 2 Versionen)
- ✅ Edge (letzte 2 Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Android)

## Performance

- Keine externen Dependencies
- Optimiert für schnelles Laden
- Minimale JavaScript-Nutzung
- CSS-basierte Animationen

## Accessibility

- Semantisches HTML
- ARIA Labels
- Keyboard Navigation
- Focus Management
- Screen Reader optimiert

## Support & Wartung

### Häufige Anpassungen

**Farben ändern:**
Bearbeiten Sie die CSS-Variablen in `css/styles.css` (Zeile 1-30)

**Navigation erweitern:**
Fügen Sie Links in allen HTML-Dateien im `<nav>` Element hinzu

**Neue Seite hinzufügen:**
1. Erstellen Sie HTML-Datei in `/pages`
2. Kopieren Sie die Struktur von einer bestehenden Seite
3. Fügen Sie den Link zur Navigation hinzu

## Kontakt & Credits

Website erstellt für: **Coaching Fabio Gallo**
Coaching-Modell: [St. Galler Coaching Modell](https://coachakademie.ch/st-galler-coaching-modell)

---

## Changelog

### Version 1.0 (Januar 2025)
- ✅ Initiale Version
- ✅ 8 Seiten mit Inhalts-Struktur
- ✅ Responsive Design
- ✅ Kontaktformular mit Validierung
- ✅ Mobile Navigation
- ✅ CSS-basiertes Logo

---

**Viel Erfolg mit Ihrer neuen Website! 🎯**
