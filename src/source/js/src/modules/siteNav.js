let siteNav = function() {

	const navActiveEl  = document.body;
	const navTriggerEl = document.querySelector('.siteNav-trigger');

	function navToggle(e) {
		e.preventDefault();
		navActiveEl.classList.toggle('siteNav-active');
	}

	navTriggerEl.addEventListener('click', navToggle);

};

export default siteNav;