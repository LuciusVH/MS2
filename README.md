# Second Milestone Project

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

This website is designed mainly to easily discover French regions, including all oversea territories. It provides some facts (historical, demographical, geographical, political...) and displays a map of each region. Some filters have been designed to help navigate the map and show certain or all points of interest: restaurants, bars, hotels, touristic monuments or attractions/activities. 

### 	Structure & Design

Oui Oui Baguette is structured in a single page website, divided in several sections. It also includes a 404 page. 

First of all, if viewed from a mobile in landscape, a [gray overlay]() with a message inviting the user to switch to portrait takes place (because some following features do not render well on small screen landscape oriented). 

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/landscape-orientation.png" alt="Overlay taking place when the website is viewed from a landscape oriented mobile"/>
</p>

The landing area takes up all viewport screen, and display a different picture depending on if the orientation of the screen is portrait or landscape. An introduction text is centered and a Call-To-Action (CTA) button invites the user to go further down. On large screen (above 992px), the logo is located in the up left corner, while the navbar links "Home", "Regions" & "Contact" are up right. On smaller screen, they get hidden under a hamburger icon, taking place on the left up corner, while the logo is moved in the center. 

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

When any slide is clicked, content is displayed dynamically. A title appears, with the name of the selected region. Under it, a paragraph displaying some of the previously enounced facts, and on the left side the region's blazon is displayed. If the clicked slide is Outre Mer, then it mostly displays a list of 11 French oversea territories and no blazon (since Outre Mer is a collection of oversea territories, it does not have a blazon on its own). After you've clicked on any oversea territory's name, then the same configuration is called: name/description/blazon. For better UX, it also displays a "Back" link under the oversea territory's description, to get the users back to the listing, avoiding them to have to wait/drag the slides back to Outre Mer and click it. 

If the app is viewed from a screen smaller than 600px, no blazon is displayed and the name & description are taking the whole width. 

When any slide or oversea territory is clicked, under the description area, a map and its filters show up. If the app is viewed from a screen larger than 992px, the filters are displayed on the left of the map. Otherwise they are displayed under it. 

The map is centered on the selected region, and its borders are highlighted by a 3px blue line. The code to do so has been found on [Ourcodeworld.com](https://ourcodeworld.com/articles/read/830/how-to-highlight-an-area-city-state-or-country-in-google-maps-with-javascript), and modified to fit the app. Quite a bit of work & fun about these borders... :sweat_smile: All the detailed explanation can be found [here](https://github.com/LuciusVH/oui-oui-baguette/tree/main/assets/boundaries.md). If Outre Mer is selected, then all oversea territories are highlighted.

For the filters, they propose to display only hotels, restaurants, bars, monuments, activities, or all of them.



The two fonts I've chosen are [Parisienne](https://fonts.google.com/specimen/Parisienne) & [Raleway](https://fonts.google.com/specimen/Raleway), both found on Google Fonts. I was looking for a nice handwritten font for my titles, to reflect authenticity and remind of the historical aspect I wanted to integrate to this project, because France and its regions are immensely rich of history. So I needed a font that was clean, nice to see but still easy to read (some handwritten fonts are beautiful but too detailed), and I selected 3 without really paying attention to their names... And when I saw one of them was actually named Parisienne, well... It was a sign :smile:! For the general font, I went with Raleway based on Google Fonts matching suggestions. I liked the simplicity of it.  

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
5. Outre Mer listing
   - The cursor changes to pointer
   - The underline stretches out on both sides
6. Back link for each Oversea Territory
   - The cursor changes to pointer
7. Map
   - The cursor changes to grab
8. Contact paper plane icon
   - The cursor changes to pointer
   - The paper plane icon giggles
9. Social icons
   - The cursor changes to pointer
   - The social media icon get scaled up

### User stories

- As a traveler, I want to discover more about France and its regions.
- As a traveler, I am planning my next trip to France and want to get a selection of places for each region.
- As a traveler, I want to learn some facts about French regions before to maybe head there.




## Features

### Existing Features

- 

### Features Left to Implement

- 



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

- 

### CSS Validator ([W3C](https://jigsaw.w3.org/css-validator/validator.html))

- 

### [JSHint](https://jshint.com/)

- 


### Lighthouse

 

#### Links testing:



#### Spotted bugs & errors:

- 

#### Tested user stories:

- 


## Deployment & cloning

You can find the deployed site [here](https://luciusvh.github.io/oui-oui-baguette/).

### Deployment

To deploy the website live through GitHub Pages I:

1. Went on my repository on GitHub and clicked on "Settings"

   <p align="center">
     <img src="https://github.com/LuciusVH/goatflix/blob/main/assets/img/readme/dpl-step1.png" alt="deployment step 1"/>
   </p>

2. Selected "Pages" on the left-side navigation menu

   <p align="center">
     <img src="https://github.com/LuciusVH/goatflix/blob/main/assets/img/readme/dpl-step2.png" alt="deployment step 2"/>
   </p>

3. On the "Source" section, I selected `Branch: main`, `/ (root)` & *Save*

   <p align="center">
     <img src="https://github.com/LuciusVH/goatflix/blob/main/assets/img/readme/dpl-step3.png" alt="deployment step 3"/>
   </p>

4. There you have it! :smile:

   <p align="center">
     <img src="https://github.com/LuciusVH/goatflix/blob/main/assets/img/readme/dpl-step4.png" alt="deployment step 4"/>
   </p>

### Cloning

If you wish to clone the project and run it locally, follow these steps once on the repository:

1. Click on the "Code" button, then on the board icon to copy the link of the repo

   <p align="center">
     <img src="https://github.com/LuciusVH/goatflix/blob/main/assets/img/readme/cln-step1.png" alt="cloning step 1"/>
   </p>

2. Open your preferred IDE

3. Change the current working directory to the location where you want the cloned directory

4. In the terminal of your IDE, type `git clone https://github.com/LuciusVH/oui-oui-baguette.git` and press **Enter**

5. There you have it! :smile:

For more info and troubleshooting, please check [GitHub documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).



## Credits

### Content

- 

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

### Acknowledgements

- 
