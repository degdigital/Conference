module.exports = {
    app: {
        files: {
            '<%= paths.dist.js %>/common.js': [
                '<%= paths.trans.js %>/modules/moduleLoader.js',
                '<%= paths.trans.js %>/modules/debounce.js',
                '<%= paths.trans.js %>/modules/siteHeader.js',
                '<%= paths.trans.js %>/modules/siteNav.js',
                '<%= paths.trans.js %>/app.js'
            ]
        }
    },
    options: {
        beautify: false,
        compress: true,
        mangle: true
    }
};