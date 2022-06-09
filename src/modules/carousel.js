const carousel = () => {
    const servicesElement = document.querySelector('.services-elements');
    const servicesCarousel = document.querySelector('.services-carousel');
    const slides = document.querySelectorAll('.services-carousel > div');
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');

    let count = 0;
    let numberOfSlides = 3;
    let slideSize = 100 / numberOfSlides;

    const addFlexSize = () => {
        slides.forEach(item => {
            item.style.flex = `0 0 ${slideSize}%`;
        });
    };

    addFlexSize();

    const sliderSize = (ratio) => {
        numberOfSlides = ratio;
        slideSize = 100 / numberOfSlides;
        addFlexSize();
    };

    window.addEventListener('resize', () => {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 960 && windowWidth > 540) {
            sliderSize(2);
        } else if (windowWidth <= 540) {
            sliderSize(1);
        } else {
            sliderSize(3);
        }
    });

    servicesElement.style.overflow = 'hidden';
    servicesCarousel.style.display = 'flex';
    servicesCarousel.style.transition = 'transform 0.5s';
    prevArrow.classList.add('disabled');

    prevArrow.addEventListener('click', () => {
        if (count < 0) {
            nextArrow.classList.remove('disabled');
            count += slideSize;
            servicesCarousel.style.transform = `translateX(${count}%)`;
        } else {
            prevArrow.classList.add('disabled');
        }
    });

    nextArrow.addEventListener('click', () => {
        const maxSlide = Math.round((slides.length - numberOfSlides) * -(slideSize));

        if (count > maxSlide) {
            prevArrow.classList.remove('disabled');
            nextArrow.classList.remove('disabled');
            count -= slideSize;
            servicesCarousel.style.transform = `translateX(${count}%)`;
        } else {
            nextArrow.classList.add('disabled');
        }
    });
};

export default carousel;