import swiper from './modules/swiper';
import smoothScroll from './modules/smoothScroll';
import timer from './modules/timer';
import calc from './modules/calc';
import requestCall from './modules/requestCall';
import measurerCall from './modules/measurerCall';
import resizeImages from './modules/resizeImages';

swiper();
smoothScroll();
timer('20 september 2022');
if (document.body.classList.contains('balkony')) {
  calc();
}
requestCall();
measurerCall();
resizeImages();
