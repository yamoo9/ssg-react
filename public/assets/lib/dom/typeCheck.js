import {
  isNull,
  isString,
  isUndefined,
  throwTypeError,
} from '../utils/index.js';

export const isElement = (node) => {
  if (isNull(node) || isUndefined(node)) {
    throwTypeError(
      '전달된 인자의 타입에 문제가 있습니다. 요소 노드를 전달하세요.'
    );
  }
  return node.nodeType === document.ELEMENT_NODE;
};

export const isDocument = (node) => {
  return node.nodeType === document.DOCUMENT_NODE;
}

export const isHTML_string = (data) => {
  return isString(data) && /<[^>]*>/.test(data);
};
