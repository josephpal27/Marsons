
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
