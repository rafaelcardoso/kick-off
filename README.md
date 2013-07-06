# Kick-off

Kick-off is a web project prototype that's based on [HTML5 Boilerplate](http://www.html5boilerplate.com/) and [Pure CSS](purecss.io). This tool was developed for those who need a boilerplate oriented to modules (css and js) to start a new project.

![image](src/assets/img/kick-off.png)

### Features

1. Writed in Sass + Compass
2. Uses Grunt to automate tasks like jshint, concat, uglify, minify and compile
3. Uses Bower to manage package dependencies (jQuery and Modernizr are included)
4. Sprites are generated automatically by Compass (believe me, this is awesome)
5. Comes with the homepage as blog and is responsive

## Installation

1. Setup a PHP enviroment (PHP is only used to include partials pages)
2. Install [Node.js](http://nodejs.org/)
3. Install [Ruby](http://www.ruby-lang.org/en/downloads/)
4. Install [Grunt.js](http://gruntjs.com/)
5. Install [Bower](http://bower.io/)
6. Install [Sass](http://sass-lang.com/)
7. Install [Compass](http://compass-style.org/install/)
8. Clone the git repo - `git clone git://github.com/rafaelcardoso/kick-off.git` - or [download it](https://github.com/rafaelcardoso/kick-off/zipball/master)
9. Move the extracted directory to your PHP environment
10. Run `npm install` from your `kick-off/` root folder to install the development dependencies
11. Run `bower install` from your `kick-off/` root folder to install the javascript dependencies
12. Finally, enjoy :)

## Usage

1. Before editing any `.html`, `.css` or `.js` file run `grunt w` from your `kick-off/` root folder to Grunt watch the modifications and compile, lint and uglify your files automatically.

## Structure

The structure of the folders is given in the following way:

```
└── src
	├── assets
	│	├── css
	│	├── font
	│	├── img
	│	│ 	├── dynamics
	│	│ 	├── favicons
	│	│ 	└── sprites
	│	├── js
	│	│ 	├── modules
	│	│ 	├── vendor
	│	│ 	│	├── modernizr
	│	│ 	│	└── jquery
	│	└── sass
	│	 	├── components
	│	 	│	├── default
	│		│	└── extended
	│	 	├── misc
	│	 	├── partials
	│	 	└── vendor
	│			└── font-awesome
	├── pages/ 
	└── structure/ 
```

#### [/](https://github.com/rafaelcardoso/kick-off/tree/master)

Contains configurations files (Grunt, Bower and Compass).

#### [src](https://github.com/rafaelcardoso/kick-off/tree/master/src)

Contains all files of the project

#### [src/assets](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets)

Contains all sass, css, javascript, images and fonts

#### [src/assets/css](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/css)

Contains the only .css generated by Sass (main.css)

#### [src/assets/font](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/font)

Contains all the fonts used on the project

#### [src/assets/img](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/img)

Contains all the images used on the project.

#### [src/assets/img/dynamics](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/img/dynamics)

Contains all mages generated dinamically by your application.

#### [src/assets/img/favicons](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/img/favicons)

Contains the favicons files

#### [src/assets/img/sprites](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/img/sprites)

Contains the images that compose sprites. Everytime that you add images in this folder, edit and save any .scss file, Compass will generate a new sprite automatically and will put him in the [src/assets/img](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/img) folder, overwriting the old image.

#### [src/assets/js](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/js)

Contains all the javascript files by your application.

#### [src/assets/js/modules](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/js/modules)

Contains all the javascript modules. Everytime that you save any .js file in this folder, grunt will hint, concat all the modules in a new file, hint the concatenated file and uglify him. The concatenated file will be put in the [src/assets/js](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/js) folder, overwriting the old file.

#### [src/assets/sass](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/)

Contains all the `.sass` and `.scss` files. In this folder exists a file called `main.scss`, this file is responsible for call all modules of your style sheet architecture. Everytime that you edit and save any `.sass` or `.scss` file in this folder or subfolders, Sass will compile a new css file called 'main.css' and put him on the folder [src/assets/css](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/css), overwriting the old file.

#### [src/assets/sass/components](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/components/)

Contains all the components of your style sheet architecture separated in modules.

#### [src/assets/sass/components/default](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/components/default)

Contains the default modules of your style sheet architecture, like buttons, forms, grids and tables.

#### [src/assets/sass/components/extended](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/components/extended)

Contains the extended modules of your style sheet architecture, like blog posts, related posts, etc.

#### [src/assets/sass/misc](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/misc)

Contains miscellaneous files, like color palette, helpers, mixins and sprites.

#### [src/assets/sass/partials](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/partials)

If exists any css rules that should be applied only to one single page, should be placed in this directory. In this folder exists a file called `structure.scss`, this file is responsible for include all modules of your style sheet architecture. (this file is called at the `main.scss`)

#### [src/assets/sass/vendor](https://github.com/rafaelcardoso/kick-off/tree/master/src/assets/sass/vendor)

Contains third-party libs and frameworks that you want to use, like font-awesome.

#### [src/pages](https://github.com/rafaelcardoso/kick-off/tree/master/src/pages)

Contains all the `.html` files, you will probably move this directory to suit your need.

#### [src/structure](https://github.com/rafaelcardoso/kick-off/tree/master/src/structure)

Contains the `.html` from header and footer of the pages (just for don't repeat in every page, you will probably change this also)

## Development guides

To Do: Explain the development guides

## To do

Improve the Gruntfile.js to generate a optimized build
Improve the tag's indentation of .html files in [src/pages](https://github.com/rafaelcardoso/kick-off/tree/master/src/pages)

## Contributing

Check [CONTRIBUTING.md](https://github.com/rafaelcardoso/kick-off/blob/master/README.md)
