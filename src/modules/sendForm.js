import {maskPhone, validateData} from "./helpers";

const sendForm = () => {
    const form = document.querySelector('.modal-callback form');
    const formElements = form.querySelectorAll('input');
    const statusBlock = document.createElement('div');
    const loadText = 'Идет отправка...';
    const errorText = 'Ошибка';
    const successText = 'Отправлено';

    validateData();
    maskPhone('input[name="tel"]', '+7 (___) ___ __ __');

    const validate = (list) => {
        let success = false;

        list.forEach(input => {
            if (input.name === "tel") {
                if (input.value.length > 17) {
                    input.classList.remove('error');
                    success = true;
                }
            }
        })

        return success;
    };

    const sendData = (data) => {
        const dataLoad = {
            "tel": data[name="tel"]
        };

        if (data[name="fio"] !== undefined && data[name="fio"].length > 0) {
            dataLoad.fio = data[name="fio"];
        }

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(dataLoad),
            headers: {
                "Content_Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input[type="text"]');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        setTimeout(() => {
            statusBlock.remove();
        }, 5000);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            statusBlock.textContent = errorText;
        }
    };

    try {
        if (!form) {
            throw new Error('Что-то пошло не так');
        }

        form.addEventListener('invalid', (event)=>{
            event.preventDefault();

            formElements.forEach(input => {
                if(input.hasAttribute('required') && !input.value) {
                    input.classList.add('error');
                }
            })

        },true);

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;