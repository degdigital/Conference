System.register("modules/debounce", [], function (_export) {
	var debounce;
	return {
		setters: [],
		execute: function () {
			"use strict";

			debounce = function debounce(func, wait, immediate) {

				var timeout = undefined;
				return function () {
					var context = this,
					    args = arguments;
					var later = function later() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			};

			_export("default", debounce);
		}
	};
});