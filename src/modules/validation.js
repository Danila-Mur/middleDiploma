import validateForm from './validateForm';

const validation = () => {
  const nameInputs = document.querySelectorAll('[name="fio"]'),
    telInputs = document.querySelectorAll('*[name="phone"]');

  const validation = ({ target }) =>
    target.classList.contains('error') &&
    validateForm([target]) &&
    target.classList.remove('error');

  const validationCyrillic = ({ target }) => {
    target.value = target.value.replace(/[^a-zA-zа-яА-я\-\s]/, '');
    validation({ target });
  };

  nameInputs.forEach((input) =>
    input.addEventListener('input', validationCyrillic)
  );
  telInputs.forEach((tel) => tel.addEventListener('input', validation));
};

export default validation;
