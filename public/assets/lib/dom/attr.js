import {
  each,
  isFunction,
  isObject,
  isString,
  throwTypeError,
} from '../utils/index.js';
import { isElement } from './typeCheck.js';

function getAttr(element, attrName) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드만 허용합니다.');
  }
  if (!isString(attrName)) {
    throwTypeError('attrName 인자는 문자 유형이어야 합니다.');
  }

  return element.getAttribute(attrName);
}

function setAttr(element, attrName, value) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드만 허용합니다.');
  }
  if (!isString(attrName)) {
    throwTypeError('attrName 인자는 문자 유형이어야 합니다.');
  }

  if (!value) {
    throwTypeError('value 인자 유형은 값이 존재해야 합니다.');
  }

  return element.setAttribute(attrName, isFunction(value) ? value() : value);
}

// attr(document.body, {
//   id: 'blob',
//   class: 'hey',
//   title: 'oops'
// })

// attr(document.body, 'id');
// attr(document.body, 'id', 'blob');

export const attr = (element, ...args) => {
  // [ attrName|attributes ]
  const [firstArg, value] = args;

  if (isObject(firstArg)) {
    const attributes = firstArg;
    return each(attributes, ([attrName, value]) =>
      setAttr(element, attrName, value)
    );
  }

  let attrName = firstArg;

  if (!value) {
    return getAttr(element, attrName);
  } else {
    setAttr(element, attrName, value);
  }
};
