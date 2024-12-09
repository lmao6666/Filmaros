function showMainPage() {
    document.getElementById('mainPage').classList.remove('hidden');
    document.getElementById('settingsPage').classList.add('hidden');
    displayFavoriteMovie();
}

function showSettingsPage() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('settingsPage').classList.remove('hidden');
}

function saveFavoriteMovie() {
    var movie = document.getElementById('movieInput').value;
    sessionStorage.setItem('favoriteMovie', movie);
    showMainPage();
}

function displayFavoriteMovie() {
    var movie = sessionStorage.getItem('favoriteMovie');
    var displayText = movie ? movie : 'Žádný film nebyl nastaven.';
    document.getElementById('favoriteMovie').textContent = displayText;
}

// Inicializace hlavní stránky
document.addEventListener('DOMContentLoaded', displayFavoriteMovie);