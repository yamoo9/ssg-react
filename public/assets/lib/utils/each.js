import { throwTypeError } from './throwError.js';
import { isArray, isObject, isFunction } from './typeOf.js';

/**
 *
 * @param {Array | Object} arrayOrObject 순환할 객체(배열 또는 객체)
 * @param {Function} callback 반복 순환 처리할 함수
 * @returns {Array} 집합 객체 반환
 */
export function each(arrayOrObject, callback) {
  if (!isFunction(callback)) {
    throwTypeError('두번째 인자의 유형은 함수만 허용합니다.');
  }

  if (isArray(arrayOrObject)) {
    return arrayOrObject.map(callback);
  }

  if (isObject(arrayOrObject)) {
    return Object.entries(arrayOrObject).map(callback);
  }

  throwTypeError('첫번째 인자의 유형은 배열 또는 객체만 허용합니다.');
}
