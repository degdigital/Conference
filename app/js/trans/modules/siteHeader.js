System.register("modules/siteHeader", ["modules/debounce"], function (_export) {
	var debounce, siteHeader;
	return {
		setters: [function (_modulesDebounce) {
			debounce = _modulesDebounce["default"];
		}],
		execute: function () {
			"use strict";

			siteHeader = debounce(function () {

				var scrollOffset = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
				var siteHeaderEl = document.querySelector(".siteHeader").classList;
				var scrollClass = "scrolled";

				if (scrollOffset > 0) siteHeaderEl.add(scrollClass);else siteHeaderEl.remove(scrollClass);

				window.addEventListener("scroll", siteHeader);
			}, 10);

			_export("default", siteHeader);
		}
	};
});