import { each, isString, throwTypeError } from '../utils/index.js';
import { getNodeList as $ } from './getNode.js';
import { isElement } from './typeCheck.js';

export function addClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드여야 합니다.');
  }
  classes
    .filter((className) => isString(className))
    .forEach((className) => element.classList.add(className));
}

export function removeClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드여야 합니다.');
  }

  if (classes.length === 0) {
    element.className = '';
  }

  classes
    .filter((className) => isString(className))
    .forEach((className) => element.classList.remove(className));
}

export function hasClass(element, className) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드여야 합니다.');
  }
  if (!isString(className)) {
    throwTypeError('className 인자는 문자 유형이어야 합니다.');
  }

  return element.classList.contains(className);
}

function toggleClassSingle(element, className) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드여야 합니다.');
  }
  if (!isString(className)) {
    throwTypeError('className 인자는 문자 유형이어야 합니다.');
  }

  element.classList.toggle(className);
}

export function toggleClass(element, ...classes) {
  const { length } = classes;
  if (length === 0) {
    throwTypeError('토글할 클래스가 하나도 없습니다.');
  }
  if (length === 1) {
    let [className] = classes;
    toggleClassSingle(element, className);
  }
  if (length > 1) {
    each(classes, (className) => toggleClassSingle(element, className));
  }
}

export function radioClass(element, className) {
  if (!isElement(element)) {
    throwTypeError('element 인자 유형은 요소 노드여야 합니다.');
  }
  if (!isString(className)) {
    throwTypeError('className 인자는 문자 유형이어야 합니다.');
  }

  const { parentElement } = element;

  if (!parentElement) {
    throwError('element의 부모 요소가 존재하지 않습니다.');
  }

  const acivatedSiblings = $(`.${className}`, parentElement);

  if (acivatedSiblings.length > 0) {
    each(Array.from(acivatedSiblings), (activatedSibling) => {
      removeClass(activatedSibling, className);
    });
  }
  addClass(element, className);
}
