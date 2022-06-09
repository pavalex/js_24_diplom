const slider = () => {
    const topSliderBlock = document.querySelector('.top-slider');
    const slides = document.querySelectorAll('.top-slider .item');
    const tableItems = document.querySelectorAll('.table');

    const timeInterval = 3000;
    let currentSlide = 0;
    let interval;

    const dotsList = document.createElement('ul');
    dotsList.classList.add('slick-dots');
    topSliderBlock.append(dotsList);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dotsList.append(dot);
        if (i === 0) {
            dot.classList.add('slick-active');
        }
    }

    const dots = document.querySelectorAll('.dot');

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active');
        prevSlide(tableItems, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'item-active');
        nextSlide(tableItems, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    };

    const startSlide = (timer) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    topSliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'item-active');
        prevSlide(tableItems, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'item-active');
        nextSlide(tableItems, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    });

    topSliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide();
        }
    }, true);

    topSliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
};

export default slider;