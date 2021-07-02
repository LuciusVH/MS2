// Allow the side navbar on mobile view
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

$(document).ready(function() {

    // Getting data from regions json file
    $.getJSON("assets/js/regions-config.js", function(REGION_CONFIG) {
        console.log(REGION_CONFIG);
        let slide = '';

        //Iterating through each object of json file
        $.each(REGION_CONFIG, function(key, val) {

            //Creation of the slide with data from json file
            slide += '<li class="glide__slide">';
            slide += '<div class="region-card">';
            slide += '<h3 class="region-card-name">' + val.name + '</h3>';
            slide += '</div>';
            slide += '</li>';
        });

        //Inserting the slide into index.html
        $('#region-slide').append(slide);
    });
});