document.addEventListener('DOMContentLoaded', () => {
    // --- KODE MODE GELAP (TIDAK BERUBAH) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    } else {
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        } else {
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
        localStorage.setItem('theme', theme);
    });

    // --- KODE UNTUK BURGER MENU (TIDAK BERUBAH) ---
    const burgerMenu = document.getElementById('burger-menu');
    const navContainer = document.querySelector('.nav-container');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('is-active');
        navContainer.classList.toggle('is-active');
    });

    // Menutup menu saat link di-klik
    navContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (burgerMenu.classList.contains('is-active')) {
                burgerMenu.classList.remove('is-active');
                navContainer.classList.remove('is-active');
            }
        });
    });
});