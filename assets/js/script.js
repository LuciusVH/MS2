// Creating all 14 slides of the regions carousel by iterating through each object of regions-config.js
for (let region of REGION_CONFIG) {

    //Creation of the slide with data from regions-config.js
    let slide = '';
    slide += '<li class="glide__slide">';
    slide += '<div class="region-card" style="background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(' + region.slideBackground + ')">';
    slide += '<h3 class="region-card-name">' + region.name + '</h3>';
    slide += '</div>';
    slide += '</li>';

    //Inserting the slide into index.html
    $('.glide__slides').append(slide);
};

// Allow the Materialize side navbar on mobile view
$(document).ready(function() {
    $('.sidenav').sidenav();
});

// Glide.js configuration
const Config = {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    focusAt: 0,
    // autoplay: 2000,
    hoverpause: true,
    breakpoints: {
        992: {
            perView: 3
        },
        600: {
            perView: 1
        }
    }
};
new Glide('.glide', Config).mount();