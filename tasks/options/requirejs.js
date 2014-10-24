
/**
 * !!! WARNING
 * DEAR BRAVE PROGRAMMER:
 * DO NOT CHANGE THIS, NOR UPDATE vendor/require-css/normalize.js,
 * THE LATTER WAS UPDATED MANUALLY TO WORK PROPERLY ON WINDOWS
 *
 */

module.exports = {
    dist: {
        options: {
            appDir: '.tmp',
            baseUrl: 'scripts',
            optimize: 'uglify2',
            uglify2: {
                mangle: false
            },
            skipDirOptimize: true,
            fileExclusionRegExp: /test|\.min\.js|src/,
            separateCSS: true,
            preserveLicenseComments: false,
            mainConfigFile: '.tmp/scripts/main.js', // here is your require.config
            dir: '<%= ezweb.dist %>',
            name: 'app',
            paths: {
                'less-builder' : '../vendor/require-less/less-builder',
                'ez-i18n-builder' : '../vendor/ezweb/i18n/ez-i18n-builder'
            },
            less: {
                relativeUrls: true
            }
        }
    }
};
