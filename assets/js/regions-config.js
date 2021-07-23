const REGION_CONFIG = [{
        name: "Ile-de-France",
        slideBackground: "assets/img/regions/ile-de-france.jpg",
        id: "region-idf",
        description: "Centred on the capital Paris, Ile-de-France is the most populated region with almost 20% of the whole country inhabitants (a bit less than 12'500'000 people). Literally called \"Island of France\", the origin of its name is actually unsure. The region is the seat of many of the most famous French monuments and attractions: the Eiffel Tower, the Notre-Dame cathedral, the Sacre-Coeur basilica, the Palace of Versailles, the Palace of Fontainebleau... and Disneyland Paris, which happens to be the most visited place in France with 15 millions people every year.",
        blazon: "assets/img/regions/blazon-ile-de-france.png",
        coordinates: {
            lat: 48.67,
            lng: 2.5,
            zoom: 7
        }
    },
    {
        name: "Hauts-de-France",
        slideBackground: "assets/img/regions/hauts-de-france.jpg",
        id: "region-hdf",
        description: "The administrative seat and main municipality of the region is the beautiful city of Lille. It is the northernmost region of France, bordered by Belgium on its east side and the English Channel on the north-west. The United Kingdom is directly connected to France through the Channel Tunnel, the the longest underwater tunnel in the world. The region is known in modern history, mainly because of the deadly Battle of the Somme (about 1'100'000 soldiers died) during WWI & Dunkirk and its evacuation during WWII.",
        blazon: "assets/img/regions/blazon-hauts-de-france.png",
        coordinates: {
            lat: 49.67,
            lng: 2.5,
            zoom: 6
        }
    },
    {
        name: "Normandie",
        slideBackground: "assets/img/regions/normandie.jpg",
        id: "region-no",
        description: "The greeniest French region, governed by the city of Caen. Famous for the camembert, this rounded creamy cheese, and for the black & white cows who procude the milk to make it. Historywise we can mention Joan of Arc, who was burned in the city of Rouen, in 1431. Normandy holds one of the most visited place in the country: the Mont-Saint-Michel. This abbey and the village around are built on a tidal island. Nobody ever successed to conquer it, though it is nowadays still the subject of a strong battle between people of Normandy & Brittany, who both claim the ownership of the place. But it is definitely in Normandie :)",
        blazon: "assets/img/regions/blazon-normandie.png",
        coordinates: {
            lat: 48.67,
            lng: 0,
            zoom: 6
        }
    },
    {
        name: "Grand-Est",
        slideBackground: "assets/img/regions/grand-est.jpg",
        id: "region-ge",
        description: "The easternmost region of mainland France (if excluding the Corse island) shares borders with Belgium, Luxembourg, Germany & Switzerland. It's governed by Starsbourg, where is also located the official seat of the European Parliament. In fact, the eurodeputies work in Brussels most of the time, but all the votes have to take place in Strasbourg. If you come around the region during winter, be sure to visit the Christmas markets that take place in every city and town. It's wonderful to walk around, hearing all these Christmas songs while drinking some mulled wine... And let's not forget that the region is holding of one of the best exported French product: Champagne!",
        blazon: "assets/img/regions/blazon-grand-est.png",
        coordinates: {
            lat: 48.67,
            lng: 5.85,
            zoom: 6
        }
    },
    {
        name: "Bretagne",
        slideBackground: "assets/img/regions/bretagne.jpg",
        id: "region-br",
        description: "The westernmost part of France, governed by the city of Rennes. Brittany is one of the two regions, with Corsica, to retain a very strong cultural identity, reflecting its history, a flag and a language of its own, completely different from French. For example, all circulation signs holds their mention in French first, and Breton right under. In Breton, the region is called Breizh and we are 100% sure you have already seen the Breizh flag during a music festival or any other kind of gathering! Talking about music, the region is famous for its multiple music festivals, especially the fest-noz which are local music festivals, where the bagadoù (bands) play their typical music with bagpipes, drums and singing.",
        blazon: "assets/img/regions/blazon-bretagne.png",
        coordinates: {
            lat: 48.67,
            lng: -3.12,
            zoom: 6
        }
    },
    {
        name: "Pays de la Loire",
        slideBackground: "assets/img/regions/pays-de-la-loire.jpg",
        id: "region-pdll",
        description: "Nantes is the capital and holds the historical Castle of the Dukes of Brittany. Back in the days, 20% of this region was part of Brittany and Nantes was the siege of the power. Hence why you find a bit of the Brittany's blazon pattern on this region's blazon too! Welcoming the end of the Loire river, it also holds some of the Castles of the Loire Valley such as Saumur and Angers. The region also is the seat of the Royal Fontevraud Abbey, founded in 1101. It's today still the widest monastic ensemble in Europe. In the city of Saint-Nazaire is located the Chantiers de l'Atlantique, one of the largest shipyards in the world, from where were produced some of the most famous ocean liners such as SS France, RMS Queen Mary II, or the more recent MS Symphony of the Seas.",
        blazon: "assets/img/regions/blazon-pays-de-la-loire.png",
        coordinates: {
            lat: 47.52,
            lng: -1.18,
            zoom: 6
        }
    },
    {
        name: "Centre-Val de Loire",
        slideBackground: "assets/img/regions/centre-val-de-loire.jpg",
        id: "region-cvdl",
        description: "The region is mostly known for being the main seat of the Loire Valley, Orleans being the capital (where originated Joan of Arc). The Loire river is the longest in France with 1'000km, and although is takes its origin in the Massif Central, in central Southern France (so not in Centre-Val de Loire), the majority of its stream runs in the region. It holds numerous castles (more than 300, including Chambord, Blois, Amboise, Chenonceau, Tours, Chinon, Villandry, Loches...) and also some of the most renowned French vineyards: Muscadet, Sancerre or Pouilly-Fumé. If you are into architecture or wine, you will feel in paradise here!",
        blazon: "assets/img/regions/blazon-centre-val-de-loire.png",
        coordinates: {
            lat: 47.52,
            lng: 1.48,
            zoom: 6
        }
    },
    {
        name: "Bourgogne-Franche-Comté",
        slideBackground: "assets/img/regions/bourgogne-franche-comte.jpg",
        id: "region-bfc",
        description: "The city of Dijon holds the regional council, and the origin of the mustard during the late Middle Ages. Staying on the same wave, have a walk in Chalon-sur-Saône where Nicéphore Niépce invented the photography during the 19th century. On the eastern side, you can visit Besançon, reputed to be the greeniest city in France and the historical capital of French watchmakers.",
        blazon: "assets/img/regions/blazon-bourgogne-franche-comte.png",
        coordinates: {
            lat: 46.82,
            lng: 4.91,
            zoom: 6
        }
    },
    {
        name: "Nouvelle-Aquitaine",
        slideBackground: "assets/img/regions/nouvelle-aquitaine.jpg",
        id: "region-na",
        description: "Here is the largest of metropolitan French regions, with a surface of slightly more than 84'000km². The prefecture city is Bordeaux and as you might have guessed it, the region is the most famous for its wine! The city even recently dedicated it a museum, the Cité du Vin. Its beautiful architecture is said to be an evocation of the soul of the wine, a dialog between the city and the Garonne river. The region is also quite renowned for its different coastal resors, the two most famous being Biarritz and Arcachon. The city of Bayonne also annually hosts a week-long festival during summer, known as the Fêtes de Bayonne, where participants are invited to wear the traditional colors: white outfit with a red scarf as belt and/or tied around the neck. Lots of dancing, celebrations, and oh yeah, drinking wine. A LOT.",
        blazon: "assets/img/regions/blazon-nouvelle-aquitaine.png",
        coordinates: {
            lat: 44.92,
            lng: 0.1,
            zoom: 6
        }
    },
    {
        name: "Auvergne-Rhône-Alpes",
        slideBackground: "assets/img/regions/auvergne-rhone-alpes.jpg",
        id: "region-ara",
        description: "This region is the 2nd most populated, after Ile-de-France, with roughly 8 millions people. The capital, Lyon, is known to be the French gastronomy capital. It has been home of the late Paul Bocuse, probably the most famous French chef around the world. Mr Bocuse even gave his name to the Bocuse d'Or, recognized as the most prestigious award for chefs. His restaurant in surrounding Lyon, l'Auberge du Pont de Collonges, has held 3 Michelin stars for 55 years long (world record) but lost the 3rd one after the passing of Paul Bocuse. The region also offers the possibility to get some exercise after having had the best meal in your life, with numerous of ski resorts in the Alpes. It is the seat of the Mont Blanc, the western culminating mountain with 4808m.",
        blazon: "assets/img/regions/blazon-auvergne-rhone-alpes.png",
        coordinates: {
            lat: 44.92,
            lng: 4.5,
            zoom: 6
        }
    },
    {
        name: "Occitanie",
        slideBackground: "assets/img/regions/occitanie.jpg",
        id: "region-oc",
        description: "This southern region shares borders with Spain and Andorra, and is the 2nd largest French region in superficy. It actually shares more than a border with Spain, especially with its northern region Catalonia: the same culture can be found on  both sides of the border. The region's capital city is Toulouse, known as the Pink City because of the red-pink color of its buildings roof tiles, made from local clay. Toulouse surrounding is the home of the European space & aeronautic leading industry with companies such as Airbus, Thales, or Safran all headquartered here. Toulouse Space Center is also the largest space center in Europe. On the architecture side, we cannot skip the fortified city of Carcassonne and its old walls from the Middle Ages.",
        blazon: "assets/img/regions/blazon-occitanie.png",
        coordinates: {
            lat: 43.9,
            lng: 2.1,
            zoom: 6
        }
    },
    {
        name: "Provence-Alpes-Côte d'Azur",
        slideBackground: "assets/img/regions/provence-alpes-cote-dazur.jpg",
        id: "region-paca",
        description: "Mostly renowned for the French Riviera, the region is a booming market for tourism and real estate. The Principality of Monaco is enclaved inside it and the region shares a border with Italy on the east side. Marseille, its capital, is the oldest city in France, founded as far as around 600BC by the Greeks, and was then called Massalia. Avignon, being the official home of the Pope and seat of the Christian world from 1305 to 1376 (and unofficial from 1378 to 1403, during the Great Schism), has been doted of a beautiful palace, the Palais des Papes. The successive popes also fortified the city, most of these walls are still here nowadays.",
        blazon: "assets/img/regions/blazon-provence-alpes-cote-dazur.png",
        coordinates: {
            lat: 43.9,
            lng: 5.8,
            zoom: 6
        }
    },
    {
        name: "Corse",
        slideBackground: "assets/img/regions/corse.jpg",
        id: "region-co",
        description: "Corsica island lies south-east of metropolitan France, in the Mediterranean Sea. Despite being fully integrated to France, the island is part of what's called territorial collectivies and enjoys a greater autonomy than other regions (e.g. it has its own taxation system). Historically, the island was tied with the Italian Tuscany, hence why everything is more italianized there. For example, its capital is the city of Ajaccio. Sounds more Italian than French, right? Also is the regional official Corsican language. Oh, by the way, you probably have heard of Corsica's most famous citizen: Napoleon Bonaparte...?",
        blazon: "assets/img/regions/blazon-corse.png",
        coordinates: {
            lat: 42.1,
            lng: 8.9,
            zoom: 7
        }
    },
    {
        name: "Outre Mer",
        slideBackground: "assets/img/regions/outre-mer.jpg",
        id: "region-om",
        description: "Being a former expansionist and colonialist superpower, France still has ownership in all or part on many oversea territories, all around the world. Here's the list, click on a name to discover more about it!",
        blazon: "",
        coordinates: {
            lat: 0,
            lng: 70,
            zoom: 2
        },
        subdivions: [{
            name: "La Réunion",
            id: "oversea-re",
            description: "Blablabla",
            blazon: "",
            coordinates: {
                lat: 0,
                lng: 70,
                zoom: 2
            }
        }]
    }
]