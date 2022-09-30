import { isFunction, throwTypeError } from '../utils/index.js';
import { isElement, isHTML_string } from './typeCheck.js';

export function text(element, content = '') {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형만 허용합니다.');
  }

  if (isFunction(content)) {
    element.textContent = content(element.textContent);
    return;
  }

  element.textContent = content.toString();
}

export function html(element, content) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형만 허용합니다.');
  }

  if (isFunction(content)) {
    element.innerHTML = content(element.innerHTML);
    return;
  }

  if (!content) {
    throwTypeError('content는 null 또는 undefined 여서는 안됩니다.');
  }

  if (!isHTML_string(content)) {
    throwTypeError('content는 HTML 태그를 포함해야 합니다.');
  }

  element.innerHTML = content;
}
