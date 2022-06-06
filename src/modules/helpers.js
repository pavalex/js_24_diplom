// animate helper
const animate = ({timing, draw, duration}) => {

    let idInterval;
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            idInterval = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(idInterval);
        }

    });
};

export {animate};