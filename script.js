function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

const toggleModeButton = document.getElementById('toggleMode');
toggleModeButton.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleModeButton.classList.remove('btn-outline-light');
        toggleModeButton.classList.add('btn-outline-dark');
        toggleModeButton.textContent = "Toggle Dark Mode";
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleModeButton.classList.remove('btn-outline-dark');
        toggleModeButton.classList.add('btn-outline-light');
        toggleModeButton.textContent = "Toggle Light Mode";
    }
});