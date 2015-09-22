module.exports = {
    sass: {
        files: ["<%= paths.src.css %>/**/*.css"],
        tasks: ["sass_globbing","postcss"],
        options: {
            "spawn": true
        }
    },
    scripts: {
        files: [
            "grunt/uglify.js",
            "grunt/babel.js",
            "<%= paths.src.js %>/**/*.js"
        ],
        tasks: [
            "babel",
            "uglify"
        ],
        options: {
            "spawn": true
        }
    },
    html: {
        files: [
            '<%= paths.src.patterns %>/**/*.mustache',
            '<%= paths.src.patterns %>/**/*.json',
            '<%= paths.src.css %>/**/*.css',
            '<%= paths.src.js %>/**/*.js',
            'src/api/*.json'
        ],
        tasks: ['shell:patternlab'],
        options: {
            "spawn": false
        }
    }
};