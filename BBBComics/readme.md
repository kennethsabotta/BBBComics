# Blah Blah Blah Comics Website

A simple static website for displaying comic pages. Built for GitHub Pages hosting.

**BBB Comics** = **B**lah **B**lah **B**lah Comics

## Project Structure

```
BBBComics/
├── index.html          # Library page (shows all comics)
├── reader.html         # Comic reader page
├── styles.css          # All styling
├── script.js           # Library page JavaScript
├── reader.js           # Reader page JavaScript
├── comics.json         # Comic metadata
├── images/             # Comic images organized by comic
│   └── example-comic-1/
│       ├── cover.jpg
│       ├── page-1.jpg
│       ├── page-2.jpg
│       └── page-3.jpg
└── README.md
```

## Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Keyboard navigation (arrow keys)
- ✅ Touch/swipe support for mobile
- ✅ Clean, minimal interface
- ✅ Easy to add new comics

## How to Add a New Comic

1. **Scan and prepare your images:**
   - Save as JPG format
   - Recommended resolution: 1200-2000px width
   - Keep file size under 1-2 MB per image

2. **Create a folder for your comic:**
   ```
   images/my-new-comic/
   ```

3. **Add your images:**
   - `cover.jpg` (thumbnail for library)
   - `page-1.jpg`, `page-2.jpg`, etc.

4. **Update `comics.json`:**
   ```json
   {
     "comics": [
       {
         "id": "my-new-comic",
         "title": "My Awesome Comic",
         "description": "A brief description of what this comic is about.",
         "date": "2025-11-18",
         "coverImage": "images/my-new-comic/cover.jpg",
         "pageCount": 5,
         "pages": [
           "images/my-new-comic/page-1.jpg",
           "images/my-new-comic/page-2.jpg",
           "images/my-new-comic/page-3.jpg",
           "images/my-new-comic/page-4.jpg",
           "images/my-new-comic/page-5.jpg"
         ]
       }
     ]
   }
   ```

5. **Commit and push** your changes to GitHub

## Deploying to GitHub Pages

### First-time Setup

1. **Push this code to GitHub:**
   ```powershell
   git add .
   git commit -m "Initial BBB Comics website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

3. **Configure the path (if needed):**
   - If your site will be at `https://username.github.io/KSabotta.Scratch/`
   - You may need to update paths in HTML files to include `/BBBComics/` prefix
   - Or move all BBBComics files to repository root

4. **Wait a few minutes** and your site will be live at:
   ```
   https://[your-username].github.io/[repository-name]/
   ```

### Publishing Updates

After adding new comics:

```powershell
git add .
git commit -m "Add new comic: [Comic Name]"
git push origin main
```

Changes will appear on your site within a few minutes.

## Local Testing

To test the site locally before deploying:

1. **Option 1: Python HTTP Server**
   ```powershell
   cd BBBComics
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Option 2: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Option 3: Node.js http-server**
   ```powershell
   npm install -g http-server
   cd BBBComics
   http-server
   ```

## Customization

### Update Site Title and Author

- Edit `index.html` - change "Blah Blah Blah Comics" and tagline
- Currently set to "Quentin and Friends"

### Change Color Scheme
Edit `styles.css` and modify:
- `#2c3e50` - Header/footer background
- `#3498db` - Button color
- `#1a1a1a` - Reader page background

### Add More Features
The codebase is simple and extensible. Consider adding:
- Search functionality
- Categories/tags
- Download as PDF option
- Comments section

## Troubleshooting

**Comics not loading:**
- Check browser console (F12) for errors
- Verify `comics.json` is valid JSON
- Check that image paths are correct

**Images not displaying:**
- Verify images are committed to git
- Check file names match exactly (case-sensitive)
- Ensure images are in JPG format

**Site not updating:**
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for deployment status
- Wait a few minutes after pushing changes

## License

© 2025 Blah Blah Blah Comics. All rights reserved.
