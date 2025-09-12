import {enableBodyScroll, disableBodyScroll} from "body-scroll-lock";
import {modalContent} from "../html";

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    toggleMenu();
    scrollToTop();
    initManufacturersModal();
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && header.classList.contains('is-active')) {
            header.classList.remove('is-active');
            header.classList.add('is-hiding');

            setTimeout(() => {
                header.classList.remove('is-hiding');
                header.classList.add('is-hidden');
                enableBodyScroll(targetEl);
            }, 300);
        }
    });
};

const scrollToTop = () => {
    const scrollButton = document.querySelector('.scroll-top');

    if (!scrollButton) return;

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

const initManufacturersModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = modalContent;

    document.body.appendChild(modal);

    const buttons = document.querySelectorAll('.mod-s');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const slide = button.closest('.swiper-slide');
            if (!slide) return;

            const title = slide.querySelector('h2')?.textContent?.trim() || '';
            const description = slide.querySelector('p')?.textContent?.trim() || '';
            const image = slide.querySelector('.slide-img');
            const imageSrc = image?.src || '';
            const imageAlt = image?.alt || '';

            const manufacturersList = slide.querySelector('ul');
            const manufacturers = [];
            if (manufacturersList) {
                const listItems = manufacturersList.querySelectorAll('li');
                listItems.forEach(li => {
                    manufacturers.push(li.textContent.trim());
                });
            }

            modal.querySelector('.modal-title').textContent = title;
            modal.querySelector('.modal-description').textContent = description;
            modal.querySelector('.modal-img').src = imageSrc;
            modal.querySelector('.modal-img').alt = imageAlt;

            const manufacturersListEl = modal.querySelector('.modal-list');
            manufacturersListEl.innerHTML = '';
            manufacturers.forEach(manufacturer => {
                const li = document.createElement('li');
                li.textContent = manufacturer;
                manufacturersListEl.appendChild(li);
            });

            modal.classList.add('modal-active');
            disableBodyScroll(modal);
        });
    });

    const closeModal = () => {
        modal.classList.remove('modal-active');
        enableBodyScroll(modal);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);

    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            closeModal()
        }
    });
};