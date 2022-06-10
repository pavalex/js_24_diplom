import Swiper, {Autoplay, Navigation} from 'swiper';

export const swiper = () => {
   new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        modules: [Autoplay, Navigation],
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });
};
