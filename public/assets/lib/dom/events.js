import {
  isFunction,
  isObject,
  isString,
  throwTypeError,
  each,
} from '../utils/index.js';
import { isDocument, isElement } from './typeCheck.js';

const addEvent = (node, type, handler) => {
  if (!isElement(node) && !isDocument(node) && node !== globalThis) {
    throwTypeError(
      '첫번째 인자는 요소 또는 문서 노드 혹은 전역 객체만 허용합니다.'
    );
  }

  if (!isString(type)) {
    throwTypeError('두번째 인자인 이벤트 타입은 문자형만 설정 가능합니다.');
  }

  if (!isFunction(handler)) {
    throwTypeError('세번째 인자인 이벤트 핸들러는 함수형만 설정 가능합니다.');
  }

  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
};

export const on = (node, ...params) => {
  // [type, handler, ....]
  if (params.length >= 2) {
    const [type, handler] = params;
    return addEvent(node, type, handler);
  } else {
    const [eventOptions] = params; /* [{}] */
    if (isObject(eventOptions)) {
      return each(eventOptions, ([type, handler]) => {
        return addEvent(node, type, handler);
      });
    } else {
      throwTypeError('두번째 전달인자인 이벤트 옵션이 객체가 아닙니다.');
    }
  }
};
