// Glide.js configuration
const Config = {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 0,
    autoplay: 2000,
    hoverpause: true,
    breakpoints: {
        1200: {
            perView: 4
        },
        992: {
            perView: 3
        },
        600: {
            perView: 1
        }
    }
};
new Glide('.glide', Config).mount();