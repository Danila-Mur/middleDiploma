import { openModal, hideModal } from './helpers';

const requestCall = () => {
  const requestCallBtn = document.querySelector('#request-call'),
    headerModal = document.querySelector('.header-modal'),
    overlayBlock = document.querySelector('.overlay');

  requestCallBtn.addEventListener('click', (e) => {
    e.preventDefault();

    openModal(headerModal, overlayBlock);
  });

  headerModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('header-modal__close')) {
      hideModal(headerModal, overlayBlock);
    }
  });
};

export default requestCall;
