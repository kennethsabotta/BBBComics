// Comic reader functionality
let currentComic = null;
let currentPage = 0;

// Get comic ID from URL parameter
function getComicId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('comic');
}

// Load comic data
async function loadComic() {
    const comicId = getComicId();
    
    if (!comicId) {
        showError('No comic specified');
        return;
    }

    try {
        const response = await fetch('comics.json');
        const data = await response.json();
        currentComic = data.comics.find(c => c.id === comicId);
        
        if (!currentComic) {
            showError('Comic not found');
            return;
        }

        displayComic();
    } catch (error) {
        console.error('Error loading comic:', error);
        showError('Error loading comic data');
    }
}

function displayComic() {
    // Update header
    document.getElementById('comic-title').textContent = currentComic.title;
    
    // Update comic info
    document.getElementById('comic-description').textContent = currentComic.description;
    document.getElementById('comic-date').textContent = `Published: ${currentComic.date}`;
    
    // Display first page
    displayPage(0);
}

function displayPage(pageIndex) {
    if (!currentComic || !currentComic.pages || currentComic.pages.length === 0) {
        return;
    }

    currentPage = pageIndex;
    
    // Update image
    const img = document.getElementById('comic-page');
    img.src = currentComic.pages[currentPage];
    img.alt = `${currentComic.title} - Page ${currentPage + 1}`;
    
    // Update page info
    document.getElementById('page-info').textContent = 
        `Page ${currentPage + 1} of ${currentComic.pages.length}`;
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentPage === 0;
    document.getElementById('next-btn').disabled = currentPage === currentComic.pages.length - 1;
}

function nextPage() {
    if (currentPage < currentComic.pages.length - 1) {
        displayPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 0) {
        displayPage(currentPage - 1);
    }
}

function showError(message) {
    document.getElementById('comic-title').textContent = 'Error';
    document.querySelector('.reader-container').innerHTML = 
        `<p class="loading">${message}</p>`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadComic();
    
    // Button controls
    document.getElementById('next-btn').addEventListener('click', nextPage);
    document.getElementById('prev-btn').addEventListener('click', previousPage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            previousPage();
        }
    });
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            nextPage();
        } else {
            // Swipe right - previous page
            previousPage();
        }
    }
}
