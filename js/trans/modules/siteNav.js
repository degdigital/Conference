System.register("modules/siteNav", [], function (_export) {
	var siteNav;
	return {
		setters: [],
		execute: function () {
			"use strict";

			siteNav = function siteNav() {

				var navActiveEl = document.body;
				var navTriggerEl = document.querySelector(".siteNav-trigger");

				function navToggle(e) {
					e.preventDefault();
					navActiveEl.classList.toggle("siteNav-active");
				}

				navTriggerEl.addEventListener("click", navToggle);
			};

			_export("default", siteNav);
		}
	};
});