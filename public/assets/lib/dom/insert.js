import {
  isBoolean,
  isNumber,
  isString,
  throwTypeError,
} from '../utils/index.js';
import { isElement, isHTML_string } from './typeCheck.js';

function prependHTML(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isHTML_string(insert)) {
    throwTypeError('insert 인자는 HTML 코드 문자여야 합니다.');
  }
  target.insertAdjacentHTML('afterbegin', insert);
}

function prependElement(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소노드여야 합니다.');
  }
  target.insertAdjacentElement('afterbegin', insert);
}

function prependText(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (
    !isElement(insert) &&
    (isString(insert) || isNumber(insert) || isBoolean(insert))
  ) {
    insert = insert.toString();
  }
  target.insertAdjacentText('afterbegin', insert);
}

function appendHTML(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isHTML_string(insert)) {
    throwTypeError('insert 인자는 HTML 코드 문자여야 합니다.');
  }
  target.insertAdjacentHTML('beforeend', insert);
}

function appendElement(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소노드여야 합니다.');
  }
  target.insertAdjacentElement('beforeend', insert);
}

function appendText(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (
    !isElement(insert) &&
    (isString(insert) || isNumber(insert) || isBoolean(insert))
  ) {
    insert = insert.toString();
  }
  target.insertAdjacentText('beforeend', insert);
}

function beforeHTML(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isHTML_string(insert)) {
    throwTypeError('insert 인자는 HTML 코드 문자여야 합니다.');
  }
  target.insertAdjacentHTML('beforebegin', insert);
}

function beforeElement(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소노드여야 합니다.');
  }
  target.insertAdjacentElement('beforebegin', insert);
}

function beforeText(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (
    !isElement(insert) &&
    (isString(insert) || isNumber(insert) || isBoolean(insert))
  ) {
    insert = insert.toString();
  }
  target.insertAdjacentText('beforebegin', insert);
}

function afterHTML(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isHTML_string(insert)) {
    throwTypeError('insert 인자는 HTML 코드 문자여야 합니다.');
  }
  target.insertAdjacentHTML('afterend', insert);
}

function afterElement(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소노드여야 합니다.');
  }
  target.insertAdjacentElement('afterend', insert);
}

function afterText(target, insert) {
  if (!isElement(target)) {
    throwTypeError('target 인자는 요소 노드여야 합니다.');
  }
  if (
    !isElement(insert) &&
    (isString(insert) || isNumber(insert) || isBoolean(insert))
  ) {
    insert = insert.toString();
  }
  target.insertAdjacentText('afterend', insert);
}

/* -------------------------------------------------------------------------- */

export function prepend(target, insert) {
  isHTML_string(insert)
    ? prependHTML(target, insert)
    : isElement(insert)
    ? prependElement(target, insert)
    : prependText(target, insert);
}

export const first = prepend;

export function append(target, insert) {
  isHTML_string(insert)
    ? appendHTML(target, insert)
    : isElement(insert)
    ? appendElement(target, insert)
    : appendText(target, insert);
}

export const last = append;

export function before(target, insert) {
  isHTML_string(insert)
    ? beforeHTML(target, insert)
    : isElement(insert)
    ? beforeElement(target, insert)
    : beforeText(target, insert);
}

export function after(target, insert) {
  isHTML_string(insert)
    ? afterHTML(target, insert)
    : isElement(insert)
    ? afterElement(target, insert)
    : afterText(target, insert);
}
