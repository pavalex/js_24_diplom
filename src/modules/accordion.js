const accordion = () => {
    const accordionPanel = document.querySelector('.accordeon');
    const accordionElements = accordionPanel.querySelectorAll('.element');
    const accordionTitles = accordionPanel.querySelectorAll('.title');
    const accordionContent = accordionPanel.querySelectorAll('.element-content');

    accordionPanel.addEventListener('click', (e) => {
        accordionTitles.forEach((title, index) => {
            if (e.target === title) {
                accordionElements[index].classList.toggle('active');
                accordionContent[index].classList.toggle('element-content-block');
            } else {
                accordionElements[index].classList.remove('active');
                accordionContent[index].classList.remove('element-content-block');
            }
        });
    });
};

export default accordion;