import {animate} from "./helpers";

const modal = () => {
    // const modal = document.querySelector('.modal');
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');

    const buttonsMenuModal = document.querySelectorAll('.callback-btn');

    buttonsMenuModal.forEach(btn => {
        btn.addEventListener('click', () => {
            const widthWindow = window.innerWidth;
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';

            if (widthWindow > 768){
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalCallback.style.opacity = progress;
                        modalOverlay.style.opacity = progress;
                    }
                });
            }
        });
    });

    document.addEventListener('click', (e)=> {
        if (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    });
};

export default modal;