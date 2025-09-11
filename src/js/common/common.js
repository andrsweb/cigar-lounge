import {enableBodyScroll, disableBodyScroll} from "body-scroll-lock";

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toggleMenu();
	scrollToTop();
})

document.getElementById("year").textContent = new Date().getFullYear().toString();

const toggleMenu = () => {
	const header = document.querySelector('.header');
	const burgerButton = header?.querySelector('.burger-button');
	const targetEl = header?.querySelector('#burger-menu');

	header.classList.add('is-hidden');

	if (!burgerButton || !header) return;

	burgerButton.addEventListener('click', () => {
		if (header.classList.contains('is-active')) {
			header.classList.remove('is-active');
			header.classList.add('is-hiding');

			setTimeout(() => {
				header.classList.remove('is-hiding');
				header.classList.add('is-hidden');
				enableBodyScroll(targetEl);
			}, 300);
		} else {
			header.classList.remove('is-hidden');
			header.classList.add('is-active');
			disableBodyScroll(targetEl);
		}
	});
};

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