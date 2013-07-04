# Kick-off

Kick-off is a web project prototype that's based on [HTML5 Boilerplate](http://www.html5boilerplate.com/) and [Pure](purecss.io). This tool was developed for those who need a boilerplate oriented to modules (css and js) to start a new project.

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
10. Run `npm install` from your `kick-off/` folder to install the development dependencies
11. Run `bower install` from your `kick-off/` folder to install the javascript dependencies
12. Finally, enjoy :)

## Usage

1. Before editing any `.html`, `.css` or `.js` file run `grunt w` from your `kick-off/` folder to Grunt watch the modifications and compile, lint and uglify your files automatically.

## Structure

The structure of the project is given in the following way:

```
├── src/
│   ├── assets/
│	│	├── css/
│	│	│ 	└── main.css
│	│	├── font/
│	│	│ 	├── FontAwesome.otf
│	│	│ 	├── fontawesome-webfont.eot
│	│	│ 	├── fontawesome-webfont.svg
│	│	│ 	├── fontawesome-webfont.ttf
│	│	│ 	└── fontawesome-webfont.woff
│	│	├── img/
│	│	│ 	├── dynamics/
│	│	│ 	│	├──	high-performance-web-sites.png
│	│	│ 	│	├──	whats-new-in-css3.png
│	│	│ 	│	└──	rafael-cardoso-avatar.png
│	│	│ 	├── favicons/
│	│	│ 	│	├──	apple-touch-icon.png
│	│	│ 	│	├──	apple-touch-icon-57x57-precomposed.png
│	│	│ 	│	├──	apple-touch-icon-72x72-precomposed.png
│	│	│ 	│	├──	apple-touch-icon-114x114-precomposed.png
│	│	│ 	│	├──	apple-touch-icon-144x144-precomposed.png
│	│	│ 	│	├──	apple-touch-icon-precomposed.png
│	│	│ 	│	├──	favicon.ico
│	│	│ 	│	└──	metro-tile.png
│	│	│ 	└── sprites/
│	│	│ 		├──	twitter.png
│	│	│ 		├──	facebook.png
│	│	│ 		└──	googleplus.png
│	│	├── js/
│	│	│ 	├── modules/
│	│	│ 	├── vendor/
│	│	│ 	│	├──	modernizr/
│	│	│ 	│	└──	jquery/
│	│	│ 	└── main.js
│	│	└── sass/
│	│	 	├── components/
│	│	 	│	├── default/
│	│		│ 	│	├──	_alerts.scss
│	│		│ 	│	├──	_buttons.scss
│	│		│ 	│	├──	_forms.scss
│	│		│ 	│	├──	_grids.scss
│	│		│ 	│	├──	_icons.scss
│	│		│ 	│	├──	_menus.scss
│	│		│ 	│	├──	_navbar.scss
│	│		│ 	│	├──	_reset.scss
│	│		│ 	│	├──	_tables.scss
│	│		│ 	│	└──	_typography.scss
│	│		│ 	└── extended/
│	│		│		└──	_post.scss
│	│	 	├── misc/
│	│		│	├── _colors.scss
│	│		│	├── _helpers.scss
│	│		│	├── _mixins.scss
│	│		│	└── _sprites.scss
│	│	 	├── partials/
│	│		│	├── _aside.scss
│	│		│	├── _base.scss
│	│		│	├── _footer.scss
│	│		│	├── _header.scss
│	│		│	├── _icons.scss
│	│		│	├── _page.scss
│	│		│	└── _structure.scss
│	│	 	└── vendor/
│	│			└── font-awesome/
│	│				├── _core.scss
│	│				├── _extras.scss
│	│				├── _font-awesome-ie7.scss
│	│				├── _font-awesome.scss
│	│				├── _icons.scss
│	│				├── _mixins.scss
│	│				├── _path.scss
│	│				└── _variables.scss
│   ├── pages/ 
│	│	├── 404.html
│	│	├── base.html
│	│	├── buttons.html
│	│	├── forms.html
│	│	├── grids.html
│	│	├── icons.html
│	│	├── index.html
│	│	├── menus.html
│	│	└── tables.html
│   ├── structure/ 
│	│	├── header.html
│	│	├── footer.html
│	├── .htaccess
│	├── crossdomain.xml
│	├── humans.txt
│	├── index.php
│	└── robots.txt
├── .bowerrc
├── .gitignore
├── bower.json
├── config.rb
├── Gruntfile.js
├── package.json
├── HISTORY.md
├── LICENSE.md
└── README.md
```

To Do: Explain folders and files

## Development guides

To Do: Explain the development guides

## Contributing

Check [CONTRIBUTING.md](https://github.com/rafaelcardoso/kick-off/blob/master/README.md)

## History

Check [HISTORY.md](https://github.com/rafaelcardoso/kick-off/blob/master/HISTORY.md)