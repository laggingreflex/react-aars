// Karma configuration
// Generated on Wed Nov 02 2016 01:37:54 GMT-0700 (Pacific Daylight Time)

const fs = require('fs');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // basePath: '../..',
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: [ 'mocha' ],
    // client: {
    //   mocha: {
    //     // change Karma's debug.html to the mocha web reporter
    //     reporter: 'html'

    //     // // require specific files after Mocha is initialized
    //     // require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],

    //     // // custom ui, defined in required file above
    //     // ui: 'bdd-lazy-var/global',
    //   }
    // },
    frameworks: [ 'mocha' ],

    // list of files / patterns to load in the browser
    files: [
      'src/**/tests/*.js',
      'src/**/*.test.js',
      'tests/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': [ 'babel' ],
      'tests/**/*.js': [ 'babel' ]
    },

    // babelPreprocessor: {
    //   // options: JSON.parse(fs.readFileSync('.babelrc', 'utf8')),
    //   options: {
    //     presets: [
    //       'es2015-node6/object-rest',
    //       'stage-0',
    //       'flow'
    //     ],
    //     'plugins': ['transform-es2015-modules-umd'],
    //     env: {
    //       test: {plugins: [ 'rewire' ]}
    //     },
    //     sourceMap: 'inline'
    //   }
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'progress' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};