- # Second Milestone Project

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/logo-readme.png" alt="Oui Oui Baguette's logo"/>
  </p>
  
  

  Hi there and welcome! :wave:

  This is a website created as my second Milestone Project for the Full Stack Developer Course of Code Institute, after completing the six first modules : HTML, CSS, User Centric Front End Development, Comparative Programming Languages Essentials, JavaScript Essentials & Interactive Frontend Development.

  You can find the deployed site [here](https://luciusvh.github.io/oui-oui-baguette/). 

  > **NOTE:** The links included in this README will not automatically open in a new tab. Press CTRL+ click on the link to open the target in a new tab.

  

  ## Table of Content

  1. [UX](https://github.com/LuciusVH/goatflix#ux)
     1. [Structure & Design](https://github.com/LuciusVH/goatflix#structure--design)
     2. [User Stories](https://github.com/LuciusVH/goatflix#user-stories)
  2. [Features](https://github.com/LuciusVH/goatflix#features)
     1. [Existing Features](https://github.com/LuciusVH/goatflix#existing-features)
     2. [Features Left to Implement](https://github.com/LuciusVH/goatflix#features-left-to-implement)
  3. [Technologies Used](https://github.com/LuciusVH/goatflix#technologies-used)
     1. [Web Technologies](https://github.com/LuciusVH/goatflix#web-technologies)
     2. [Developer tools](https://github.com/LuciusVH/goatflix#web-technologies)
  4. [Testing](https://github.com/LuciusVH/goatflix#testing)
  5. [Deployment](https://github.com/LuciusVH/goatflix#deployment)
  6. [Credits](https://github.com/LuciusVH/goatflix#credits)
     1. [Content](https://github.com/LuciusVH/goatflix#content)
     2. [Media](https://github.com/LuciusVH/goatflix#media)
     3. [Acknowledgements](https://github.com/LuciusVH/goatflix#acknowledgements)

  


------

------

  ## UX

This website is designed mainly to easily discover​ French regions, including all oversea territories. It provides some facts (historical, demographical, geographical, political...) and displays a map of each region. Some filters have been designed to help navigate the map and show certain or all points of interest: restaurants, bars, hotels, touristic monuments or attractions/activities. 

  ### 	Structure & Design

**Oui Oui Baguette** is structured in a single page website, divided in several sections. It also includes a 404 page. 

First of all, if viewed from a mobile in landscape, a gray overlay with a message inviting the user to switch to portrait takes place (because some following features do not render well on small screen landscape oriented). 

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/landscape-overlay.png" alt="Overlay taking place when the website is viewed from a landscape oriented mobile"/>
  </p>

The landing area takes up all viewport screen, and display a different picture depending on if the orientation of the screen is portrait or landscape (mostly useful if viewed from a tablet). An introduction text is centered and a Call-To-Action (CTA) button invites the user to go further down. On [large screen](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/global-desktop.png) (above 992px), the logo is located in the up left corner, while the navbar links "Home", "Regions" & "Contact" are up right. On [smaller screen](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/global-mobile.png), they get hidden under a hamburger icon, taking place on the left up corner, while the logo is moved in the center. 

Since the user gets access to the regions right after the landing area, and to the contact form through a fixed icon in the right bottom corner of the screen (appearing once the user scrolls down), it did not appear useful to fix the navbar. 

The next section displays a carousel of 14 slides. These slides are set up dynamically, from [script.js](https://github.com/LuciusVH/oui-oui-baguette/blob/09dcb1b56aab02c4871c59fb65299ac71a3c37d1/assets/js/script.js#L8). Depending on which screen size the app is viewed, it shows a maximum of 5 slides or:

  - 4 slides: -1200px
  - 3 slides: -992px
  - 1 slide: -600px

Each slide corresponding to a French administrative region:

  1. Ile-de-France
  2. Hauts-de-France
  3. Normandie
  4. Grand-Est
  5. Bretagne
  6. Pays de la Loire
  7. Centre-Val de Loire
  8. Bourgogne-Franche-Comté
  9. Nouvelle-Aquitaine
  10. Auvergne-Rhône-Alpes
  11. Occitanie
  12. Provence-Alpes-Côte d'Azur
  13. Corse
  14. Outre Mer

On [large screen](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/selected_region-desktop.png), when any slide is clicked, content is displayed dynamically. A title appears, with the name of the selected region. Under it, a paragraph displaying some of the previously enounced facts, and on the left side the region's blazon is displayed. If the clicked slide is Outre Mer, then it mostly displays a list of 11 French oversea territories and no blazon (since Outre Mer is a collection of oversea territories, it does not have a blazon of its own). After you've clicked on any oversea territory's name, then the same configuration is called: name/description/blazon. For better UX, it also displays a "Back" link under the oversea territory's description, to get the users back to the listing, avoiding them to have to wait/drag the slides back to Outre Mer and click it.

If the app is viewed from a [screen smaller](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/selected_region-mobile.png) than 600px, no blazon is displayed and the name & description are taking the whole width. 

When any slide or oversea territory is clicked, under the description area, a map and its filters show up. If the app is viewed from a screen larger than 992px, the filters are displayed on the left of the map. Otherwise they are displayed under it. 

The map centers on the selected region, and its borders are highlighted by a 3px blue line. The code to do so has been found on [Ourcodeworld.com](https://ourcodeworld.com/articles/read/830/how-to-highlight-an-area-city-state-or-country-in-google-maps-with-javascript), and modified to fit the app. Quite a bit of work & fun about these borders... :sweat_smile: All the detailed explanation can be found [here](https://github.com/LuciusVH/oui-oui-baguette/tree/main/assets/docs/boundaries.md). If Outre Mer is selected, then all oversea territories are highlighted.

For the filters, they propose to display only hotels, restaurants, bars, monuments, activities, or all of them. They display 20 markers only (as Google search displays only 20 results per page), except the "all" filter which display a collection of all other filters, so a total of 100 markers. I implemented the marker clusterer function from Google Maps, so in case some individual markers get on top of one another they all get collected under a clusterer, which improves UX. The clusterer can be clicked on, which zooms in and displays the markers (or another clusterer if some are still on top of one another). Also, when a filter icon is hovered on large screen or clicked on smaller screen, the mention "Filters" changes to what the selected filter refers to, just in case the icons weren't representative enough. 

When a marker is clicked, an infowindow shows up and displays the place's name, rating & website: 

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/infowindow1.png" alt="Infowindow with all data"/>
  </p>


If the place does not have rating yet, or a website, then the infowindow shows a rating mention or nothing in case of website absence:

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/infowindow2.png" alt="Infowindow with no rating"/>         
  </p>


  <p align="center">
  	<img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/infowindow3.png" alt="Infowindow with no website"/>
  </p>


Clicking on a new marker will automatically close the previously opened infowindow, so the user does not end up with different infowindows stacked on top of each other. 

Finally, when the user clicks on the navbar "Contact" link or the paper plane icon, it opens up a modal alert, overlaying the rest of the website. The contact form is simple: first name input field, last name input field, email input field & message input field + submit button. The modal can be closed down by clicking on the cross in the up right corner, or anywhere outside the modal. Since I wanted to keep the contact form really basic, I did not make a wireframe for it.

On a more general design plan, I wanted to use the French flag colors so the three of them can be found on the "France" span in the landing area, as underline of the "Filters" mention and on the border of the contact form. The official colors are *#000091* - *#FFFFFF* - *#E1000F* as stated on the [French government website](https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/les-couleurs). The background-color of the button is *#000091* as well as is the contact form text color & the social media icons. I also used this blue as base for the general background-color of the body, and to highlight the regions/oversea territories boundaries. 

You can also find the French flag as a marker, as previously said, and also as favicon. Other French symbols/clichés/symbols (yes, let's face it, they are actually French symbols lol) used are:

  - The baguette used in the logo :baguette_bread:
  - The wine bottle & glass as footer top decoration :wine_glass:

  The two fonts I've chosen are [Parisienne](https://fonts.google.com/specimen/Parisienne) & [Raleway](https://fonts.google.com/specimen/Raleway), while the default font is sans-serif, all found on Google Fonts. I was looking for a nice handwritten font for my titles, to reflect authenticity and remind of the historical aspect I wanted to integrate to this project, because France and its regions are immensely rich of history. So I needed a font that was clean, nice to see but still easy to read (some handwritten fonts are beautiful but too detailed), and I selected 3 without really paying attention to their names... And when I saw one of them was actually named Parisienne, well... It was a sign :smile:! For the general font, I went with Raleway based on Google Fonts matching suggestions. I liked the simplicity of it.  

All links, interactive items or CTA are highlighted when hovered (here listed by chronological encounter): 

  1. Logo

     - The cursor changes to pointer

  2. Navbar links

     - The cursor changes to pointer
     - The text color changes gradually to grey

  3. CTA button on landing area

     - The cursor changes to pointer
     - The shadow gets darkened

  4. Slides of the carousel

     - The cursor changes to grab

  5. Navigation arrows on the carousel

     - The cursor changes to pointer

  6. Outre Mer listing

     - The cursor changes to pointer
     - The underline stretches out on both sides

  7. Back link for each Oversea Territory

     - The cursor changes to pointer

  8. Map

     - The cursor changes to grab

  9. Map filters icons

     - The cursor changes to pointer

     - The filter icon get scaled up

  10. Contact paper plane icon

      - The cursor changes to pointer
      - The paper plane icon giggles

  11. Closing cross on contact modal form

      - The cursor changes to pointer

  12. Submit button on contact modal form

      - The cursor changes to pointer
      - The shadow gets darkened

  13. Social icons

      - The cursor changes to pointer
      - The social media icon get scaled up

  ### 

  ### User stories

  - As a traveler, I want to discover more about France and its regions.
  - As a traveler, I am planning my next trip to France and want to get a selection of places for each region.
  - As a traveler, I want to learn some facts about French regions before to maybe head there.

  


  ## Features

  ### Existing Features

  - Landing area - this section introduces the purpose of the app with a short text & a CTA button invites the users to start discovering French regions.
  - Navbar - allows the users to easily find their way to the regions carousel or to open up the contact modal form. 
  - Regions carousel - displays all 14 administrative regions in the shape of cards with beautiful pictures in the background.
  - Region content - displays information about the selected region: its name, its blazon or coat of arms and a quick description with some facts (historical, demographical, geographical, political...), main landmarks, why this region is renowned for... 
  - Map area - a map centered on the selected region, with its boundaries highlighted. Filters are available on the left side or under the map, depending on the devices the app is viewed from. They allow the users to navigate more easily on the map, displaying only interesting markers to the users.
  - Social links - takes the users to the social media platforms on which the app is present.
  - Contact modal form - allows the users to get in touch with the app admin.
  - Contact icon - allows the users to open up the contact modal form from anywhere on the page, since the navbar isn't fixed.
  - Favicon - allows the users to find the Oui Oui Baguette tab in their browser more easily & improve SEO.
  - 404 page - inform the users that something went wrong and invite them to get back to the actual content.

  ### Features Left to Implement

  - Back end to be added, so the users can comment on places 

  

  ## Technologies Used

  ### Web technologies

  - [HTML](https://en.wikipedia.org/wiki/HTML)
    - Basic language to structure the pages.
  - [CSS](https://en.wikipedia.org/wiki/CSS) 
    - Used to style the website.
  - [Materialize 1.0.0](https://materializecss.com/)
    - Used for responsive grid structure & navbar. 
  - [JavaScript](https://www.javascript.com/)
    - Used for interactivity, implementation of several items based on a js file & to call on Google Maps & EmailJS API.
  - [Glide JS](https://glidejs.com/)
    - Used for the carousel of regions.
  - [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview) (+ [Places library](https://developers.google.com/maps/documentation/places/web-service/overview))
    - Used to load the map, target & display regions and their affiliated markers on the map.
  - [EmailJS](https://www.emailjs.com/)
    - Used to transfer messages sent through the contact modal to an email address (<u>existing but never checked!</u>).

  ### Developer tools

  - [Github](https://github.com/)
    - The project uses **Github** to manage and host the repository.
  - [Git](https://git-scm.com/) 
    - The project uses **Git** for Version Control. 
  - [Visual Studio Code](https://code.visualstudio.com/)
    - **VSCode** was the IDE used to build this project. 
  - [Typora](https://typora.io/)
    - **Typora** was used to write this README.md file.
  - [Balsamiq](https://balsamiq.com/)
    - **Balsamiq** was used to create the wireframes. 
  - [TinyPNG](https://tinypng.com/)
    - **TinyPNG** was used to compress all pictures, in order to reduce the loading time and improve UX. 
  - [GIMP 2.10.24](https://www.gimp.org/)
    - Pictures have been created or altered with the help of **GIMP**. 
  - [Favicon.io](https://favicon.io/)
    - **FavIcon** was used to create and implement the favicon. 

  

  ## Testing

The website has been tested automatically through W3C HTML & CSS validators, JavaScript was analyzed via JSHint, and the whole website with Lighthouse. 

  ### HTML Validator ([W3C](https://validator.w3.org/))

  **index.html** 

  - Bad value " " for attribute `src` on element `img`: Must be non-empty (L107) - *unchanged*

    The `src` attribute is defined dynamically through [script.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/script.js#L105). 

  - The type attribute is unnecessary for JavaScript resources (L215 - 216 - 222 - 223 - 225 - 226) - *corrected*

    I removed the attribute from all lines.

  **404.html** 

  - The type attribute is unnecessary for JavaScript resources (L122 - 123 - 130) - *corrected*

    I removed the attribute from all lines.

  ### CSS Validator ([W3C](https://jigsaw.w3.org/css-validator/validator.html))

  - "text" is not a `background-clip` value - *unchanged*

    After checking with [CanIUse](https://caniuse.com/), this property works on all updated computer browsers so I decided to go forward with it anyway. 

  - Multiple "unknown vendor extension" - *corrected*

    After verification through [CanIUse](https://caniuse.com/), all properties associated with the mentioned vendor extension are supported in all updated browsers. I removed them all. 

  ### [JSHint](https://jshint.com/)

  **boundaries.js** 

  - Missing semicolon (L4328) - *corrected*

    Semicolon added.

  - Unused variable (L1) - *unchanged*

    `BOUNDARIES_DATA` is used in [script.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/script.js).

  **glide-config.js** 

  - Undefined function (L21) - *unchanged*

    `Glide()` is imported from external [GlideJS](https://glidejs.com/) in [index.html](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L213).

  **regions-config.js** 

  - Missing semicolon (L290) - *corrected*

    Semicolon added.

  - Unused variable (L1) - *unchanged*

    `REGION_CONFIG` is used in [script.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/script.js).

  **script.js** 

  - Do not use `new` for side effects - *corrected*

    Used by [Google Maps API](https://cloud.google.com/maps-platform/maps).

  - Missing semicolon (L172 - 173) - *corrected*

    Semicolons added.

  - Undefined variables (`REGION_CONFIG`, `google`, `BOUNDARIES_DATA` & `MarkerClusterer`) - *unchanged*

    `REGION_CONFIG` & `BOUNDARIES_DATA` are defined internally in [region-config.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/regions-config.js#L1) & [boundaries.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/boundaries.js#L1) then imported in [index.html (1)](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L223) & [index.html (2)](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L222), while `google` and `MarkerClusterer` are imported from external [Google Maps API](https://cloud.google.com/maps-platform/maps) in [index.html (3)](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L229) & from [Marker Clusterer](https://github.com/googlemaps/js-markerclustererplus) in [index.html (4)](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L228).

  - Unused function (L52) - *unchanged*

    `initMap()` is used by Google Maps API.

  **send-email.js** 

  - Missing semicolon (L17 - 25 - 35) - *corrected*

    Semicolons added.

  - Undefined variables (`emailjs` & `modalClosing()`) - *unchanged*

    `emailjs` is imported from external [SendEmail](https://www.emailjs.com/) in [index.html](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L224) & `modalClosing()` is defined internally in [script.js](https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/js/script.js#L364) then imported in [index.html](https://github.com/LuciusVH/oui-oui-baguette/blob/main/index.html#L225).

  ### Lighthouse

   **index.html**

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/lighthouse-wikigoat.png" alt="Lighthouse report of index.html"/>
  </p>


  **404.html**

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/lighthouse-404.png" alt="Lighthouse report of 404.html"/>
  </p>




The website has also been tested manually, all along its creation. I personally tested and checked it with Chrome, Mozilla Firefox & Microsoft Edge. Thanks to Chrome DevTools, I emulated the following screenviews and made the website responsive on each of the following device:

  - Moto G4
  - Galaxy S5
  - iPhone 5/SE
  - iPhone 6/7/8
  - iPhone 6/8/8 Plus
  - iPhone X
  - iPad
  - iPad Pro
  - Surface Duo

I also used my own Huawei P20 to test it (browser: Ecosia (using Chromium)).

  #### Links testing:

  **Navbar, on both pages**

  - Logo loads *index.html*.
  - "Home" loads *index.html*.
  - "Regions" loads *index.html*, links to "regions-container" ID.
  - "Contact" loads the contact modal.

  **index.html**

  - "Select a region" CTA button links to "regions-container" ID.
  - The paper plane icon loads the contact modal.
  - Each slide of the carousel loads its respective content.
  - Navigation arrows on the carousel:
    - The left arrow brings back to the previous slide.
    - The right arrow brings to the next slide.
  - Each item in the "Outre Mer" listing loads its respective content.
  - The "Back" link brings back to the "Outre Mer" listing.
  - Each map filter icon loads its respective markers on the map.
  - The cross on the contact modal form closes the modal.
  - The "Submit" button on contact modal form sends the message through SendEmail API.
  - The social links:
    - "Facebook" loads https://www.facebook.com/.
    - "Instagram" loads https://www.instagram.com/.
    - "YouTube" loads https://www.youtube.com/.

  #### Spotted bugs & errors:

N/A

  #### Tested user stories:

  - *As a traveler, I want to discover more about France and its regions.*

    Each region or oversea territory is displayed on screen, and on the map with its boundaries highlighted. A brief text introduce the region and give some facts about the region/oversea territory. The blazon or coat of arms of the region/oversea territory is also displayed.

  - *As a traveler, I am planning my next trip to France and want to get a selection of places for each region.*

    The map filters allows to show a specific category of places (restaurants, bars, hotels, monuments or activities) or all of them. When a marker is clicked, an infowindow displays at minimum the place's name, but also Google Maps' ratings & place's website if available. 

  - *As a traveler, I want to learn some facts about French regions before to maybe head there.*

    Some quick facts are presented in the text when a region/oversea territory is selected. They cover history, geography, demographic or politics.

  


  ## Deployment & cloning

You can find the deployed site [here](https://luciusvh.github.io/oui-oui-baguette/).

  ### Deployment

To deploy the website live through GitHub Pages I:

  1. Went on my repository on GitHub and clicked on "Settings"

     <p align="center">
       <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/dpl-step1.png" alt="deployment step 1"/>
     </p>

  2. Selected "Pages" on the left-side navigation menu 

     <p align="center">
       <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/dpl-step2.png" alt="deployment step 2"/>
     </p>

  3. On the "Source" section, I selected `Branch: main`, `/ (root)` & *Save*

     <p align="center">
       <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/dpl-step3.png" alt="deployment step 3"/>
     </p>

  4. There you have it! :smile:

     <p align="center">
       <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/dpl-step4.png" alt="deployment step 4"/>
     </p>

  ### Cloning

If you wish to clone the project and run it locally, follow these steps once on the repository:

  1. Click on the "Code" button, then on the board icon to copy the link of the repo

     <p align="center">
       <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/cln-step1.png" alt="cloning step 1"/>
     </p>

  2. Open your preferred IDE

  3. Change the current working directory to the location where you want the cloned directory

  4. In the terminal of your IDE, type `git clone https://github.com/LuciusVH/oui-oui-baguette.git` and press **Enter**

  5. Do not forget to change the [Google Maps API key]() to your own, since mine is restricted to the deployed website & live preview addresses only. For more information, please visit [Google Maps documentation](https://developers.google.com/maps/documentation/javascript/get-api-key).

  <p align="center">
    <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/gm-key.png" alt="location of the Google Maps API key"/>
  </p>

  6. There you have it! :smile:

For more info and troubleshooting, please check [GitHub documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

  

  ## Credits

  ### Content

  - All text content has been written by myself.

  ### Media

  - The baguette picture used in the logo is from [Clipartart](https://clipartart.com/images/french-baguette-clipart-2.png). 
  - On the landing area, the background image in portrait orientation is from [Pexels](https://www.pexels.com/photo/old-residential-house-near-narrow-canal-in-sunlight-5091736/), the landscape one is from [Unsplash](https://unsplash.com/photos/DW8ra3yRmfU).
  - The [Ile-de-France](https://www.pexels.com/fr-fr/photo/tour-eiffel-grise-sur-la-photographie-de-mise-au-point-2675268/) slide picture is from Pexels.
  - The [Nouvelle-Aquitaine](https://www.shutterstock.com/fr/image-photo/bayonne-france-july31-unknown-people-dresses-705460363) slide picture is from Shutterstock.
  - The [Outre Mer](https://unsplash.com/photos/UVZUepIf9B4), [Normandie](https://unsplash.com/photos/mlItaXQdVsw), [Auvergne-Rhône-Alpes](https://unsplash.com/photos/HoMqP_ldh-s) & [Centre-Val de Loire](https://unsplash.com/photos/vkzY2XZTP_8) slide pictures are from Unsplash.
  - The [Provence-Alpes-Côte d'Azur](https://stock.adobe.com/fr/images/notre-dame-de-la-garde-and-olf-port-in-marseille-france/80426077), [Hauts-de-France](https://stock.adobe.com/fr/images/beffroi-de-la-chambre-de-commerce-de-lille/348180377), [Grand-Est](https://stock.adobe.com/fr/images/colmar-s-little-venice-colmar-alsace-france/319485000), [Bretagne](https://stock.adobe.com/fr/images/ile-de-batz-en-bretagne/54887735), [Pays de la Loire](https://stock.adobe.com/fr/images/chateau-des-ducs-de-bretagne-nantes/168525893), [Bourgogne-Franche-Comté](https://stock.adobe.com/fr/images/le-centre-ville-de-dole-petite-venise-du-jura-et-ses-canaux-en-franche-comte/380693130), [Occitanie](https://stock.adobe.com/fr/images/pont-du-gard-occitanie-france/231842035) & [Corse](https://stock.adobe.com/fr/images/bonifacio-corse/42132714) slide pictures are from Adobe Stock.
  - The French flag used as favicon & all 24 blazons & emblem pictures are from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page). 
  - The French flag used as map marker is from [Flyclipart](https://flyclipart.com/france-clipart-french-school-paris-france-clipart-119112) and has been altered using GIMP.
  - The 6 icons used as map filters are from [Flaticon](https://www.flaticon.com/), and the svg code has been modified on each to turn them white following [this method](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element/27287453#27287453). 
  - The fixed contact paper plane icon is from [Flaticon](https://www.flaticon.com/free-icon/send_2983788) too, and has been filled white using GIMP.
  - The footer image I created myself using GIMP.
  - The broken bottle image, on the 404 page, has been found on [PNGIMG](https://pngimg.com/image/94546).

  ### Acknowledgements

  - Several code snippets on script.js have been taken from Google Maps documentation and modified to fit this app. They are all credited by comments in the code itself. 
  - The code to display the boundaries of each territory has been found on [Our Code World](https://ourcodeworld.com/articles/read/830/how-to-highlight-an-area-city-state-or-country-in-google-maps-with-javascript). 
  - I want to give a special thanks to Code Institute tutors who really, *really*, **really** pointed me in the right direction in order to implement some features of this app! Thanks a lot guys, you are amazing :raised_hands:
  - And my boyfriend, who's now turning green every time he hears any more of my "Okay, what do you think of this?" :heart: