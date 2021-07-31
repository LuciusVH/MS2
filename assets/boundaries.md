## Detailed methodology to obtain the boundaries for each different region/oversea territory

All 14 regions mainland's boundaries (including Corsica) + officially fully integrated to France oversea territories such as Guyane, Saint-Pierre et Miquelon, Martinique, Guadeloupe, Mayotte & Reunion islands) coordinates have been found on [data.gouv.fr](https://www.data.gouv.fr/en/datasets/contours-des-regions-francaises-sur-openstreetmap/).

New Caledonia, Saint Barthelemy, Wallis and Futuna, Saint Martin & French Polynesia were all individually found on [GADM](https://gadm.org/index.html).

They both provided me with archive files containing all the data (Shapefile format), as precise as they are registered by the official land registry. 

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries1.png" alt="Borders for France mainland, Corsica, Guyane, Saint-Pierre et Miquelon, Martinique, Guadeloupe, Mayotte & Reunion islands"/>
</p>

> All the data found on data.gouv.fr.

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries2.png" alt="Example of the very detailed precision"/>
</p>

> Example of the very detailed precision, right now centered on Mayotte island.

The files were way too big because way too precise and detailed for my use. I used the app [Mapshaper](https://mapshaper.org/) to work with them and, using the ["visvalingam weighted method"](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify), reduce a couple of factors: the lines (reduced to 10% which was enough for my use, meaning much less individual lines), and the precision of the coordinates (reduced to 5 decimal digits instead of the original 16).

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries3.png" alt="Improvement of the file"/>
</p>

> Improvement of the file, using visvalingam weighted method.

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries4.png" alt="Improvement of the file"/>
</p>

> Improvement of the file, reducing the number of lines to 10%.

In some cases, that meant deleting some small islands boundaries. Or in the case of Saint Martin, New Caledonia & French Polynesia, I actually had to draw the boundaries myself for different reasons.

- Saint Martin

  Since the island is splitted in between two sovereignties, French and Dutch, I couldn't find the sovereignty boundaries, only the "land" ones. 

- New Caledonia & French Polynesia

  They are both a collection of several islands or even archipelagos, and in the case of French Polynesia we are talking about more than 100 islands and atolls. That meant thousands of coordinates, even after simplification, or plenty islands not taken in.

For this, I used [birdtheme.org](http://www.birdtheme.org/useful/v3tool.html), which allowed me to draw my own boundaries on the map and get the coordinates.

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries5.png" alt="Drawing my own boundaries, thanks to birdtheme.org"/>
</p>

> Drawing my own boundaries, thanks to birdtheme.org.

Whether I got the coordinates from Mapshaper or Birdtheme, they weren't ready to be displayed yet. 

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries6.png" alt="Exporting the data to GeoJSON"/>
</p>

> Exporting the data to GeoJSON

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries7.png" alt="Data obtained"/>
</p>

> Data obtained, here is just a small portion of the data for Reunion island only.

:pray: God bless VSCode, its functionalities & its keyboard shortcuts... I ended up with this data, properly formatted and ready to be displayed! 

<p align="center">
  <img src="https://github.com/LuciusVH/oui-oui-baguette/blob/main/assets/img/readme/boundaries8.png" alt="Data ready to be displayed!"/>
</p>

> Data formatted and ready to be displayed!

