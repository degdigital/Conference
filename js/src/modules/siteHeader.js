import debounce from 'modules/debounce';

let siteHeader = debounce(function() {

	const scrollOffset = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
	const siteHeaderEl = document.querySelector('.siteHeader').classList;
	const scrollClass  = 'scrolled';

	if (scrollOffset > 0) siteHeaderEl.add(scrollClass)
	else siteHeaderEl.remove(scrollClass)

	window.addEventListener('scroll', siteHeader);

}, 10);

export default siteHeader;