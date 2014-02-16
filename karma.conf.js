// Karma configuration
// Generated on Sun Feb 16 2014 14:13:56 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'vendor/assets/javascripts/ionic/release/js/ionic.js',
      'vendor/assets/javascripts/angular/angular.js',
      'vendor/assets/javascripts/angular-animate/angular-animate.js',
      'vendor/assets/javascripts/angular-sanitize/angular-sanitize.js',
      'vendor/assets/javascripts/angular-ui-router/release/angular-ui-router.js',
      'vendor/assets/javascripts/ionic/release/js/ionic-angular.js',
      'vendor/assets/javascripts/angular-mocks/angular-mocks.js',
      {pattern: 'app/assets/javascripts/application.js', included: false, watched: false, served: false},
      'app/assets/javascripts/**/*.js',
      'test/unit/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
