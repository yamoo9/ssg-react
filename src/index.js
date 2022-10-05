import { getElement as $, css, getRandomMinMax, loop } from './utils';

const bodyElement = $('body');

// console.log(bodyElement);

const styleMap = {
  'min-height': '100vh',
  background: 'salmon',
};

Object.entries(styleMap).forEach(([key, value]) => {
  css(bodyElement, key, value);
});

// function rollDice(n = 6) {
//   return getRandomMinMax(1, n);
// }

// loop(() => console.log(rollDice(12)), 120);
