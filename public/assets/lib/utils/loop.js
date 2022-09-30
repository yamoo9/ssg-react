import { isFunction } from './typeOf.js';
import { throwTypeError } from './throwError.js';

export function loop(callback, repeatCount = 10) {
  if (!isFunction(callback)) {
    throwTypeError('callback 인자 유형은 함수여야 합니다.');
  }
  Array(repeatCount).fill(null).forEach((_, i) => callback(i));
}
