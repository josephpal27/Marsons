
// Banner Slider Functionality
var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    fadeEffect: {
        crossFade: true,
    },
    grabCursor: true,
});

// --------------------------------------------------------------------------------------------------------------

// Home Page Products Card Hover Functionality
let productCards = document.querySelectorAll('.products-card-row .product-card');
let productCardLayer = document.querySelectorAll('.products-card-row .product-card .layer');

productCards.forEach((productCard, index) => {
    productCard.addEventListener('mouseenter', () => {
        productCardLayer[index].style.top = '0';
    });

    productCard.addEventListener('mouseleave', () => {
        productCardLayer[index].style.top = '-100%';
    });
});

// --------------------------------------------------------------------------------------------------------------

// Functionality For Footer Icon Hover
let footIconBox = document.querySelectorAll('.footer-icon-row .footer-icon');
let footIcon = document.querySelectorAll('.footer-icon-row .footer-icon i');

footIconBox.forEach((box, i) => {
    box.addEventListener('mouseenter', () => {
        footIcon[i].style.color = '#e91f29';
    })
    box.addEventListener('mouseleave', () => {
        footIcon[i].style.color = '#fff';
    })
})

// --------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const lenis = new Lenis({
        duration: 0.5, // Adjust the duration for smooth scrolling
        easing: (t) => t * (2 - t),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function() {
        lenis.scrollTo(0, { duration: 0.5 });
    });

    // Scroll progress functionality
    const progressRing = document.querySelector('.progress-ring__circle');
    const radius = progressRing.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRing.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
    }

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setProgress(scrollPercent);

        // Show or hide the back-to-top button based on scroll position
        if (scrollTop > 200) {
            backToTopButton.style.bottom = '1rem';
        } else {
            backToTopButton.style.bottom = '-5rem';
        }
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call to set the progress on page load
});

// --------------------------------------------------------------------------------------------------------------

// Functionality for Who We Are Page Tabbing System
let tabButtons = document.querySelectorAll('.who-we-are-box .btn-row .tab-btn');
let tabContents = document.querySelectorAll('.who-we-are-box .tab-body .tab-content');
let tabImages = document.querySelectorAll('.who-we-are-image img');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        tabContents.forEach((content) => content.classList.remove('active'));
        tabContents[index].classList.add('active');

        tabImages.forEach((img) => img.classList.remove('active'));
        tabImages[index].classList.add('active');
    });
})