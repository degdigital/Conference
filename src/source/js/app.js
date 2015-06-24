System.register("modules/moduleLoader", [], function(_export) {
    var moduleLoader;
    return {
        setters: [],
        execute: function() {
            "use strict";
            moduleLoader = {
                init: function init() {
                    var elsWithModules = Array.prototype.slice.call(document.querySelectorAll("[data-module]"));
                    elsWithModules.forEach(this.loadModule);
                },
                loadModule: function loadModule(el) {
                    var moduleId = el.getAttribute("data-module");
                    System["import"](moduleId).then(function(module) {
                        console.log(module);
                    });
                }
            };
            _export("default", moduleLoader);
        }
    };
});