document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	scrollToTop();
})

const scrollToTop = () => {
	const scrollButton = document.querySelector('.scroll-top');

	if(!scrollButton) return;

	scrollButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})
}