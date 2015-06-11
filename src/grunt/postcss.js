module.exports = {
    all: {
        options: {
            map: false,
            processors: [
                require("postcss-import")(),
                require("postcss-mixins")(),
                require("postcss-nested")(),
                require("postcss-custom-properties")(),
                require("postcss-custom-media")(),
                require("postcss-calc")(),
                require("postcss-color")(),
                require("autoprefixer-core")({
                    browsers: 'last 2 versions'
                }).postcss,
                require('csswring')
            ]
        },
        files: [
            {
                expand: true,
                cwd: "<%= paths.src.css %>",
                src: ['*.css'],
                dest: "<%= paths.src.css %>",
                ext: '.css'
            }
        ]
    }
};