import { animate } from './helpers';

const calc = () => {
  const calcBlock = document.querySelector('#calc'),
    calcType = calcBlock.querySelector('#calc-type'),
    calcMaterial = calcBlock.querySelector('#calc-type-material'),
    calcArea = calcBlock.querySelector('#calc-input'),
    calcTotal = calcBlock.querySelector('#calc-total');

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;

    let calcAreaValue = 1;
    let calcTotalValue = 1;

    if (calcArea.value > 1) {
      calcAreaValue = calcArea.value;
    }

    if (calcType.value && calcMaterial.value) {
      calcTotalValue = calcTypeValue * calcMaterialValue * calcAreaValue;
      calcTotal.disabled = false;
    } else {
      calcAreaValue = 0;
    }

    animate({
      timing(timeFraction) {
        return timeFraction;
      },
      duration: 200,
      draw(progress) {
        calcTotal.value = Math.round(progress * calcTotalValue);
      },
    });
  };

  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcMaterial ||
      e.target === calcArea
    ) {
      countCalc();
    }
  });
};

export default calc;
