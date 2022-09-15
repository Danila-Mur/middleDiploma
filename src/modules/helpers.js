const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const openModal = (modal, overlay) => {
  animate({
    timing(timeFraction) {
      return timeFraction;
    },
    duration: 300,
    draw(progress) {
      modal.style.display = 'block';
      overlay.style.display = 'block';
      modal.style.opacity = `${progress}`;
      overlay.style.opacity = `${progress}`;
    },
  });
};

const hideModal = (modal, overlay) => {
  animate({
    timing(timeFraction) {
      return 1 - timeFraction;
    },
    duration: 500,
    draw(progress) {
      overlay.style.opacity = `${progress}`;
      modal.style.opacity = `${progress}`;

      setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
      }, 300);
    },
  });
};

export { animate, openModal, hideModal };
