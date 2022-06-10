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

// validate helper
const validateData = () => {
    const inputName = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputTel = document.querySelectorAll('input[name="tel"]');

    const txtRegexp = /[^а-яё -]+$/gi;

    for (let i = 0; i < inputName.length; i++) {
        inputName[i].addEventListener('input', () => {
            inputName[i].value = inputName[i].value.replace(txtRegexp, '').trimStart();

            if (inputName[i].value.length > 2 && inputName[i].classList.contains('error')) {
                inputName[i].classList.remove('error');
            } else if (inputName[i].value.length < 2) {
                inputName[i].classList.add('error');
            }
        });
    }

    for (let i = 0; i < inputTel.length; i++) {
        inputTel[i].addEventListener('input', () => {
            if (inputTel[i].value.length > 17 && inputTel[i].classList.contains('error')) {
                inputTel[i].classList.remove('error');
            } else if (inputTel[i].value.length < 18) {
                inputTel[i].classList.add('error');
            }
        });
    }
};

// maskPhone helper
function maskPhone(selector, masked = '+7 (__) --') { const elems = document.querySelectorAll(selector);

    function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i !== -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
        }
        if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
        }

    }

    for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }
}

export {animate};
export {validateData};
export {maskPhone};

