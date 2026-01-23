# Quentin and Friends Comics

A web-based comic reader for viewing comics created by Quentin and Friends!

## Features

- Browse all available comics from the homepage
- Read comics page-by-page with an interactive reader
- Keyboard navigation support (arrow keys)
- Mobile-friendly responsive design

## Local Development

To test the site locally, you need to serve the files through a local HTTP server. Opening the HTML files directly in a browser won't work due to CORS restrictions when loading the comics.json file.

Run this command from the project root:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Adding New Comics

1. Create a new folder in `images/` with your comic name (e.g., `images/MyNewComic/`)
2. Add your comic page images to the folder (JPG format recommended)
3. Update `comics.json` to include the new comic entry with:
   - `id`: A unique identifier (lowercase, hyphenated)
   - `title`: Display title
   - `description`: Brief description
   - `date`: Publication date (YYYY-MM-DD)
   - `coverImage`: Path to the cover image
   - `pageCount`: Number of pages
   - `pages`: Array of paths to each page image

## Project Structure

```
├── index.html          # Homepage with comic grid
├── reader.html         # Comic reader page
├── comics.json         # Comic metadata
├── script.js           # Homepage JavaScript
├── reader.js           # Reader JavaScript
├── styles.css          # Stylesheet
└── images/             # Comic images
    ├── WeirdPants/
    ├── MrWeirdPants/
    └── CakeWars/
```
