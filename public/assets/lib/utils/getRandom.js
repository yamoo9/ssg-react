import { throwError } from './throwError.js';
import { isNumber } from './typeOf.js';

export const getRandom = (n) => {
  if (!isNumber(n)) throwError('n 값은 숫자형이 아닙니다.');
  return Math.round(Math.random() * n);
};

export const getRandomMinMax = (min = 0, max = 10) => {
  if (!isNumber(min) || !isNumber(max)) {
    throwError('min 또는 max 값이 숫자형이 아닙니다.');
  }

  if (min >= max) {
    throwError('min 값이 max 값보다 크거나 같습니다.');
  }

  return getRandom(max - min) + min;
};
