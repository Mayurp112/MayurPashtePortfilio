# Public assets — replace these placeholders

Drop the following files into this `public/` folder so the site can serve them:

| File | Used by | Notes |
|------|---------|-------|
| `resume.pdf` | Resume section (preview + download) | **Required.** Export your LaTeX resume to PDF and save it here as `resume.pdf`. |
| `og-image.png` | Social share preview (Open Graph) | Optional. ~1200×630px. |
| `favicon.svg` | Browser tab icon | Provided (edit if you like). |

## Project screenshots (optional)
The project cards use gradient placeholders by default. To use real screenshots,
add images to `src/assets/projects/` and set the `image` field in
`src/data/projects.js` to the imported image (see comments in that file).
