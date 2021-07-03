// Allow the Materialize side navbar on mobile view
$(document).ready(function() {
    $('.sidenav').sidenav();
});

// Creating all 14 slides of the regions carousel by iterating through each object of regions-config.js
for (let region of REGION_CONFIG) {

    //Creation of the slide with data from regions-config.js
    let slide = '';
    slide += '<li class="glide__slide">';
    slide += '<div class="region-card" id="' + region.id + '" style="background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(' + region.slideBackground + ')">';
    slide += '<h3 class="region-card-name">' + region.name + '</h3>';
    slide += '</div>';
    slide += '</li>';

    //Inserting the slide into index.html
    $('.glide__slides').append(slide);
};

//Displaying the right region-related content depending on which slide is clicked
$('.region-card').click(function() {

    //Determine which card has been clicked
    let whichRegion = this.id;
    console.log(whichRegion);


    //Make the selection invitation <p> disappearing & change the display of the region's name and content to visible
    $('#region-selection-invite').slideUp(function() {
        $('#region-name, #region-description').fadeIn('slow')
    });

})