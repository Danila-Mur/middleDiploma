import Swiper from 'swiper/bundle';

const swiper = () => {
  
  new Swiper('.swiper.benefits-inner', {
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
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

};

export default swiper;
