import Swiper from 'swiper';
import { Navigation, EffectCoverflow, EffectFade } from "swiper/modules";

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    initSwiper('.swiper-f', 'fade', {
        slidesPerView: 1,
    });
    initSwiper('.swiper-img', 'coverflow', {
        initialSlide: 1,
        coverflowEffect: {
            slideShadows: false,
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 8
        }
    });
});

const commonSwiperOptions = {
    grabCursor: true,
    speed: 700,
    modules: [Navigation],
    centeredSlides: true
};

function initSwiper(selector, effect, effectOptions = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    new Swiper(container, {
        ...commonSwiperOptions,
        modules: [...commonSwiperOptions.modules, effect === 'fade' ? EffectFade : EffectCoverflow],
        effect: effect,
        navigation: {
            nextEl: container.querySelector('.swiper-next'),
            prevEl: container.querySelector('.swiper-prev'),
        },
        ...effectOptions
    });
}