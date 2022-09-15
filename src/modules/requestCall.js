import { animate } from './helpers';

const requestCall = () => {
  const requestCallBtn = document.querySelector('#request-call'),
    headerModal = document.querySelector('.header-modal'),
    overlayBlock = document.querySelector('.overlay');

  const openModal = () => {
    animate({
      timing(timeFraction) {
        return timeFraction;
      },
      duration: 300,
      draw(progress) {
        headerModal.style.display = 'block';
        overlayBlock.style.display = 'block';
        headerModal.style.opacity = `${progress}`;
        overlayBlock.style.opacity = `${progress}`;
      },
    });
  };

  const hideModal = () => {
    animate({
      timing(timeFraction) {
        return 1 - timeFraction;
      },
      duration: 500,
      draw(progress) {
        overlayBlock.style.opacity = `${progress}`;
        headerModal.style.opacity = `${progress}`;

        setTimeout(() => {
          headerModal.style.display = 'none';
          overlayBlock.style.display = 'none';
        }, 300);
      },
    });
  };

  requestCallBtn.addEventListener('click', (e) => {
    e.preventDefault();

    openModal();
  });

  headerModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('header-modal__close')) {
      hideModal();
    }
  });
};

export default requestCall;
