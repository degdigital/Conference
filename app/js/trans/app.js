System.register("app", ["modules/moduleLoader"], function (_export) {
	var moduleLoader, app;
	return {
		setters: [function (_modulesModuleLoader) {
			moduleLoader = _modulesModuleLoader["default"];
		}],
		execute: function () {
			"use strict";

			app = function app() {
				moduleLoader.init();
			};

			_export("default", app);
		}
	};
});