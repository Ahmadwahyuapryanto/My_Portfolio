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

    navContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (burgerMenu.classList.contains('is-active')) {
                burgerMenu.classList.remove('is-active');
                navContainer.classList.remove('is-active');
            }
        });
    });

    // --- KODE ANIMASI KETIK (TIDAK BERUBAH) ---
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    
    const textArray = ["Desain Grafis", "Web Desainer", "Logo Desainer", "Mobile-App Desainer", "Web Development"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // --- KODE UNTUK MODAL PORTFOLIO (DIPERBARUI) ---
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const modal = document.getElementById('portfolio-modal');

    // PERBAIKAN: Cek apakah modal ada sebelum menjalankan kode di dalamnya
    if (modal) {
        const modalImage = document.getElementById('modal-image');
        const modalDescription = document.getElementById('modal-description');
        const closeButton = document.querySelector('.close-button');

        portfolioCards.forEach(card => {
            card.addEventListener('click', () => {
                // Pastikan elemen modal internal ada
                if (modalImage && modalDescription) {
                    const imgSrc = card.querySelector('img').src;
                    const description = card.querySelector('.card-content p').textContent;

                    modalImage.src = imgSrc;
                    modalDescription.textContent = description;
                    
                    modal.classList.add('is-active');
                }
            });
        });

        // Fungsi untuk menutup modal
        const closeModal = () => {
            modal.classList.remove('is-active');
        };

        // PERBAIKAN: Cek apakah tombol close ada sebelum menambahkan event listener
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        // Menutup modal jika klik di luar area konten
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Menutup modal dengan tombol Escape
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('is-active')) {
                closeModal();
            }
        });
    }
    // Tambahkan kode ini di dalam event listener DOMContentLoaded di script.js

    // --- KODE ANIMASI SCROLL ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // relatif terhadap viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari elemen harus terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi berjalan
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Tambahkan kelas awal
        observer.observe(section);
    });
    // --- PERUBAHAN: Inisialisasi Portfolio Slider ---
    var swiper = new Swiper(".portfolio-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});
