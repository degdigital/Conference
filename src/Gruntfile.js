module.exports = function(grunt) {

    var paths = {
        src: {
            api: 'source/api',
            css: 'source/css',
            fonts: 'source/fonts',
            images: 'source/images',
            js: 'source/js/src',
            patterns: 'source/_patterns'
        },
        trans: {
            js: 'source/js/trans'
        },
        dist: {
            api: 'public/api',
            css: 'public/css',
            fonts: 'public/fonts',
            images: 'public/images',
            js: 'source/js',
            patterns: 'public/patterns'
        },
        pub: {
            js: 'public/js'
        },
        app: {
            css: '../app/css',
            fonts: '../app/fonts',
            images: '../app/images',
            js: '../app/js',
            patterns: '../app/'
        }
    };

    require('load-grunt-config')(grunt, {
        config: {
            paths: paths
        }
    });
};