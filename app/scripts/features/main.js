/**
 * In the 'features' directory, put one directory per feature module.
 *
 *  A typical feature is organized like this:
 *  /feature
 *   * feature.js    <-- The feature module. See home/home.js
 *   * feature.less  <-- The feature's stylesheet. Linked in the feature.js file by a 'less!./feature' requirejs binding
 *   * feature.html  <-- The angular template. Linked  in the feature.js file by a 'text!./feature.html' requirejs
 *                       binding and injected in the route controller by the 'template' route config parameter
 *   * images/       <-- Images used by this feature, included in the CSS or in <img tags in the HTML with
 *                       ng-src="'images/my-image.png' | ezFeaturePath:'feature'"
 *   * <other required files for the feature>
 *
 * In this file, require your feature's main JS file.
 * The corresponding AngularJS modules will be automatically loaded
 * on app startup (if you use ezweb.start()). Make sure you name your modules 'app.features.*'.
 */
define([ //
    './home/home', //
    './event/event', //
    './event-category/event-category', //
    './categories/categories', //
    './event-details/event-details' //
    // Require your files here
], function (angular) {
    // Using EZWeb module auto-loading
});
