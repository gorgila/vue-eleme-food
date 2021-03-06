# ELEME FOOD APP (clone)

This front-end application was created in order to practice Vue and [Bootstrap-Vue](https://bootstrap-vue.js.org/). This project includes rich features, such as registering, logging in, ordering, shopping cart, sortable shops and so on. This is a large scale app to help me learn Vue in more depth. The main technologies involved are:
- Vue 2
- Vuex
- Vue-router
- Webpack
- Bootstrap-Vue
- SASS
- Fetch
- ES6/7
 
## Usage

Before starting, please make sure **NodeJS**, and **SASS** are installed on your local machine. 

Install the required node modules
```sh
$ npm install
```

#### Backend Setup
I only implemented front-end side of this application and the corresponding back-end system can be found and download [here](https://github.com/bailicangdu/node-elm). The back-end API I used is from [@bailicangdu](https://github.com/bailicangdu). Therefore, you must need Internet access during developing this project.

#### Running

To run the **development** build, use the command
```sh
$ npm run dev
```

To run the **production** build, use the command
```sh
$ npm run build
```

The **app frontend** can be accessed at `http://localhost:9000`. 


#### Examples

##### City List, Food Search, & Shop
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/0-search-city-shops-open-shop.gif" width="300" />

##### Footer Navigation & Shop Search
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/1-nav.gif" width="300" />

##### Category Filtering & Shop Sorting
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/2-food%20category-filter-sort.gif" width="300" />

##### Shop Detail & Ordering Food
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/3-shop-detail-and%20order-food.gif" width="300" />

##### Order Confirmation & History
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/4-order-and-order-list.gif" width="300" />

##### Account Management
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/5-account-featuers.gif" width="300" />

##### Profile Features & Logout
<img src="https://github.com/gorgila/vue-eleme-food/raw/master/gifs/6-profile-features.gif" width="300" />


------------
#### ACKNOWLEDGEMENTS

Thanks to [@bailicangdu](https://github.com/bailicangdu). This project is based on [bailicangdu's project](https://github.com/bailicangdu/vue2-elm). It helped me to practice how to use Vue in a relevantly large scale project. Major changes to the project include:
- Removed styles out of the .vue files and shifted them into a separate SASS files.
- Rewritten .vue file template sections using Bootstrap-Vue.
- Changed color theme, adjusted user interface elements, and replaced some SVG icons with [Font Awesome 4.7](https://fontawesome.com/v4.7.0/) icons.
- Restructured Vuex.Store to several modules and page files.
- Removed superfluous code in several files.

------------
#### LICENSE

[GPL](https://github.com/gorgila/vue-eleme-food/blob/master/COPYING)