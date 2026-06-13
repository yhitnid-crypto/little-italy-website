# Bella Vita – Statische Website

Diese Website ist als reines HTML/CSS/JS gebaut und liegt komplett im Ordner `public/site/`.
Für den Export bzw. Umzug (z. B. zu WordPress oder einem klassischen Webspace) reicht es,
diesen Ordner zu kopieren.

## Ordnerstruktur

```
public/site/
├── index.html         # Startseite
├── ueber-uns.html     # Über uns
├── speisekarte.html   # Speisekarte (mit PDF-Link)
├── kontakt.html       # Kontakt
├── impressum.html     # Impressum (TMG)
├── css/style.css
├── js/main.js
├── images/            # alle Bilder
└── pdf/menue.pdf      # Platzhalter für die Speisekarte
```

## Speisekarte ersetzen

Die echte Speisekarte einfach als `menue.pdf` in `public/site/pdf/` ablegen.

## WordPress-Umzug

Da jede Seite eine eigene HTML-Datei mit klaren Sektionen (Hero, Text,
Öffnungszeiten, CTA, Footer) ist, lässt sich der Inhalt 1:1 in WordPress-Seiten
übertragen. Die Farbpalette (CSS-Variablen oben in `style.css`) kann in den
Theme-Customizer übernommen werden.
