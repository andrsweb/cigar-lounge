import Swiper from 'swiper';
import {Navigation, EffectCoverflow} from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    initSwiper();
})

const initSwiper = () => {
    const swiper = new Swiper('.swiper-img', {
        grabCursor: true,
        initialSlide: 1,
        speed: 700,
        modules: [Navigation, EffectCoverflow],
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
            slideShadows: false,
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 8
        },
    })
}

