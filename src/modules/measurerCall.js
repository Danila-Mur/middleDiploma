import { openModal, hideModal } from './helpers';

const measurerCall = () => {
  const serviceButtons = document.querySelectorAll('.service-button'),
    serviceModal = document.querySelector('.services-modal'),
    overlayBlock = document.querySelector('.overlay');

  serviceButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      openModal(serviceModal, overlayBlock);
    });
  });

  serviceModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('services-modal__close')) {
      hideModal(serviceModal, overlayBlock);
    }
  });
};

export default measurerCall;
