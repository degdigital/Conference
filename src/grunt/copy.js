module.exports = {
    "css": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dist.css %>",
            "src": ["**/*.css"],
            "dest": "<%= paths.app.css %>"
        }]
    },
    "js": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dist.js %>",
            "src": ["**/*.js", "!**/source/**"],
            "dest": "<%= paths.app.js %>"
        }]
    },
    "images": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dist.images %>",
            "src": ["**/*"],
            "dest": "<%= paths.app.images %>"
        }]
    },
    "patterns": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dist.patterns %>",
            "src": ["**/*-pages-*.html", "!**/*-pages-*.escaped.html", "!**/*-project-details*", "!**/*-pages-*-talk.html"],
            "dest": "<%= paths.app.patterns %>/",
            "flatten": true,
            "filter": 'isFile',
            "rename": function(dest, src) {
                return dest + src.substr(17);
            }
        }],
        "options": {
            "process": function (content, srcpath) {
                return content.replace(/<!-- Begin Pattern Lab -->[\s\S]*<!-- End Pattern Lab -->/ig, "")
                              .replace(/<!-- Begin Pattern Lab JS -->[\s\S]*<!-- End Pattern Lab JS -->/ig, "")
                              .replace(/..\/..\//g, "")
            }
        }
    },
    "fonts": {
        "files": [{
            "expand": true,
            "cwd": "<%= paths.dist.fonts %>",
            "src": ["**/*"],
            "dest": "<%= paths.app.fonts %>"
        }]
    }
};