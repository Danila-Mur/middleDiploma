import validateForm from './validateForm';
import { hideModal } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.querySelector(formId);
  const statusBlock = document.createElement('div');
  const overlayBlock = document.querySelector('.overlay');
  statusBlock.style.textAlign = 'center';
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Отправлено!';

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      if (val) {
        formBody[key] = val;
      }
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (element) {
        if (element.textContent !== '' || element.value !== '') {
          if (elem.type === 'block') {
            formBody[elem.id] = element.textContent;
          } else if (elem.type === 'input') {
            formBody[elem.id] = element.value;
          }
        }
      }
    });

    if (validateForm(formElements)) {
      statusBlock.textContent = loadText;
      form.append(statusBlock);
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(
            () => (
              (statusBlock.textContent = ''),
              form.closest('.modal') ? hideModal(form.closest('.modal'), overlayBlock) : ''
            ),
            2000
          );
          formElements.forEach((input) => {
            if (input.getAttribute('name') !== 'page') {
              input.value = '';
            }
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    }
  };

  try {
    if (!form) {
      throw new Error('Form not found');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default sendForm;
