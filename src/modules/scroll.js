const scroll = () => {
    const topMenuItems = document.querySelectorAll('.top-menu a');
    const headerWrapper = document.querySelector('.header-wrapper');
    const buttonUp = document.querySelector('.up');
    const servicesSection = document.querySelector('.services-section');

    const heightHeaderWrapper = headerWrapper.offsetHeight;
    const servicesSectionTop = servicesSection.offsetTop;

    // Топ меню - скролл
    for (let anchor of topMenuItems) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href');

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // Плавный скролл
    window.addEventListener('scroll',() =>{
        let scrollTop = window.scrollY;

        if (scrollTop >= servicesSectionTop - heightHeaderWrapper) {
            buttonUp.style.display = 'block';
        } else {
            buttonUp.style.display = 'none';
        }
    });

    buttonUp.addEventListener('click', () => {
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: 0,
        });
    });
};

export default scroll;