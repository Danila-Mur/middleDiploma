import swiper from './modules/swiper';
import smoothScroll from './modules/smoothScroll';
import timer from './modules/timer';
import calc from './modules/calc';
import requestCall from './modules/requestCall';

swiper();
smoothScroll();
timer('20 september 2022');
if (document.body.classList.contains('balkony')) {
  calc();
}
requestCall();
