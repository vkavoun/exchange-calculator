# AngularJS 1.5+ with web components and ES6 with example component

This project is based off the project NG6-starter from AngularClass (https://github.com/AngularClass/NG6-starter).

I decided to use this as the base code because the build cycle complete and stabilized. The objective of the project is
not to concentrate on the build cycle but rather demonstrate the project structure, setup and showcase a widget component, a currencies exchange widget.

# Table of Contents
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the App](#running-the-app)
        * [Gulp Tasks](#gulp-tasks)
        * [Testing](#testing)
* [Future Iterations](#future-iterations)

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* Download/clone this repo
* `npm install` to install dependencies

## Running the App
exchange-calculator uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.
 
### Tasks
Here's a list of available tasks:
* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `npm run watch`
  * alias of `serve`
* `npm start` (which is the default task that runs when typing `gulp` without providing an argument)
  * runs `serve`.
  
### Testing
**NOTE:**<br/>
At the moment there are just the bare minimum test cases.<br/><br/>
To run the tests, run `npm test`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file(s) you want.
`Mocha` is the testing suite and `Chai` is the assertion library. If you would like to change this, see `karma.conf.js`.

#Future Iterations
* `converter.controller`
    * currently the converter component is loading exchange rates $onInit and when exchange currencies change
    * need to improve the getRates() method to expand the observable to throttle and debounce requests to improve
    performance
* `add asset build cycle to the project`
    * at the moment the build cycle does not deal with non javascript and css related tasks. In order for this to become
    a complete boilerplate codebase asset building needs to be added
* `implement server`
    * just as it sounds. Server needs to be added.
