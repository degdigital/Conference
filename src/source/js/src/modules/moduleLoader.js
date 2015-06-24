let moduleLoader = {

    init: function() {
        var elsWithModules = Array.prototype.slice.call(document.querySelectorAll('[data-module]'));
        elsWithModules.forEach(this.loadModule);
    },

    loadModule: function(el) {
        var moduleId = el.getAttribute('data-module');
        System.import(moduleId).then(module => {
            module.default(el);
        });
    }

};

export default moduleLoader;