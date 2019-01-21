module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'spec/**/*.specs.js'
        ],
        preprocessors: {
            '**/src/*.js': ['coverage']
        },
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        reporters: ['progress', 'coverage', 'coveralls'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
    });
};
