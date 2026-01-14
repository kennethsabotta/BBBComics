// Load comics data and display in the library
async function loadComics() {
    try {
        const response = await fetch('comics.json');
        const data = await response.json();
        displayComics(data.comics);
    } catch (error) {
        console.error('Error loading comics:', error);
        document.getElementById('comics-grid').innerHTML = 
            '<p class="loading">Error loading comics. Please check comics.json file.</p>';
    }
}

function displayComics(comics) {
    const grid = document.getElementById('comics-grid');
    
    if (!comics || comics.length === 0) {
        grid.innerHTML = '<p class="loading">No comics available yet.</p>';
        return;
    }

    grid.innerHTML = comics.map(comic => `
        <a href="reader.html?comic=${comic.id}" class="comic-card">
            <img src="${comic.coverImage}" alt="${comic.title} cover">
            <div class="comic-card-content">
                <h2>${comic.title}</h2>
                <p>${comic.description}</p>
                <p class="comic-meta">${comic.pageCount} pages • ${comic.date}</p>
            </div>
        </a>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadComics);
