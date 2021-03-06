module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/public/**/*.js',
            'test/unit/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        preprocessors: {
        },

        reporters: ['progress'],
        port: 3000,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: 1
    })
}
