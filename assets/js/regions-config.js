const REGION_CONFIG = [{
        name: "Ile-de-France",
        slide: "assets/img/regions/ile-de-france.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-ile-de-france.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Hauts-de-France",
        slide: "assets/img/regions/hauts-de-france.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-hauts-de-france.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Normandie",
        slide: "assets/img/regions/normandie.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-normandie.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Grand-Est",
        slide: "assets/img/regions/grand-est.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-grand-est.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Bretagne",
        slide: "assets/img/regions/bretagne.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-bretagne.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Pays de la Loire",
        slide: "assets/img/regions/pays-de-la-loire.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-pays-de-la-loire.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Centre-Val de Loire",
        slide: "assets/img/regions/centre-val-de-loire.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-centre-val-de-loire.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Bourgogne-Franche-Comté",
        slide: "assets/img/regions/bourgogne-franche-comte.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-bourgogne-franche-comte.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Nouvelle-Aquitaine",
        slide: "assets/img/regions/nouvelle-aquitaine.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-nouvelle-aquitaine.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Auvergne-Rhône-Alpes",
        slide: "assets/img/regions/auvergne-rhone-alpes.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-auvergne-rhone-alpes.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Occitanie",
        slide: "assets/img/regions/occitanie.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-occitanie.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Provence-Alpes-Côte d'Azur",
        slide: "assets/img/regions/provence-alpes-cote-dazur.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-provence-alpes-cote-dazur.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Corse",
        slide: "assets/img/regions/corse.jpg",
        description: "Bah Blah Blah",
        blazon: "assets/img/regions/blazon-corse.png",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    },
    {
        name: "Outre Mer",
        slide: "assets/img/regions/outre-mer.jpg",
        description: "Bah Blah Blah",
        blazon: "",
        images: [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg",
        ],
        coordinates: {
            lat: 12.2,
            lng: 12.3,
        }
    }
]



// function slideCreation(slide, name) {
//     $('#region-slide').append('<li />').find('li').addClass('glide__slide');
//     $('#region-slide li:last-child').append('<div />').find('div').addClass('region-card').css('background-image', 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("${item.slide}")');
//     $('#region-slide li div:last-child').append('<h3 />').find('h3').addClass('region-card-name').text('${item.name}');

//     let slide = (`
// <li class="glide__slide">
//     <div class="region-card" style="background-image:url('${item.slide}');">
//         <h3 class="region-card-name">${item.name}</h3>
//     </div>
// </li>`);

//     $("#region-slide").append(slide);
// }

// slideCreation();