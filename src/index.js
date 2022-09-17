import swiper from './modules/swiper';
import smoothScroll from './modules/smoothScroll';
import timer from './modules/timer';
import calc from './modules/calc';
import requestCall from './modules/requestCall';
import measurerCall from './modules/measurerCall';
import resizeImages from './modules/resizeImages';
import maskPhone from './modules/maskPhone';
import validation from './modules/validation';
import sendForm from './modules/sendForm';

swiper();
smoothScroll();
timer('20 september 2022');
if (document.body.classList.contains('balkony')) {
  calc();
}
requestCall();
measurerCall();
resizeImages();
maskPhone('[name="phone"]', '+7 (___)-___-__-__');
validation();
sendForm({ formId: '#form1', someElem: [{ type: 'input', id: 'calc-total' }] });
sendForm({ formId: '#form2', someElem: [{ type: 'input', id: 'calc-total' }] });
sendForm({ formId: '#form3', someElem: [{ type: 'input', id: 'calc-total' }] });
sendForm({ formId: '#form4', someElem: [{ type: 'input', id: 'calc-total' }] });
