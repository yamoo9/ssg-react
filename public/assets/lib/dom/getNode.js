import { isDocument, isElement } from './typeCheck.js';
import { isString, throwTypeError } from '../utils/index.js';

export const getNodeList = (selector, context = document) => {
  if (!isString(selector)) {
    throwTypeError('selector 타입은 문자형이여야 합니다.');
  }
  if (isDocument(context) || isElement(context)) {
    return context.querySelectorAll(selector);
  }
};

// rest parameters → array
// spread syntax → array => each item
export const getNode = (...params) => getNodeList(...params)[0];
