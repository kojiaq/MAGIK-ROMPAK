document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scrolling untuk Navigation Bar dan Contact Button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Observer untuk Fade-in Animation
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Apabila 20% elemen kelihatan, ia akan trigger
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Berhenti memerhati selepas aktif
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});