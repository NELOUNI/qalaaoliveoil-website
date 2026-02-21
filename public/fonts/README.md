# Fonts folder (required location)

**All custom font files must be placed in this folder:** `my-app/public/fonts/`

The app loads them via Next.js `next/font/local` from here. Files in any other folder will not be used.

## Exact file names required

Place your font files here with these **exact** names:

| Font | Use | File name |
|------|-----|-----------|
| Blacker Sans Display Book | Body / regular text | `BlackerSansDisplay-Book.ttf` |
| Blacker Sans Display Medium | Headers (h1–h6) | `BlackerSansDisplay-Medium.ttf` |
| Aurellio | Accent & testimonials | `Aurellio-Regular.ttf` |
| ALSALAM-LIGHT | Arabic (RTL) | `ALSALAM-LIGHT.ttf` |

- If your Aurellio or Alsalam file is `.woff` or `.woff2`, either rename it to `.ttf` or add a copy with the `.ttf` name above.
- Path from project root: **`public/fonts/`** (this folder).

After adding or changing files, restart the dev server (`npm run dev`).
