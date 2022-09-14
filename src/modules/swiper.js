import Swiper from 'swiper/bundle';

const swiper = () => {
  
  new Swiper('.swiper.benefits-inner', {
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      551: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    },
  })

  new Swiper('.swiper.service__swiper', {
    navigation: {
      nextEl: '.services__arrow--right',
      prevEl: '.services__arrow--left',
    },
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
    },
  })
};

export default swiper;
