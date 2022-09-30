import { isFunction } from '../utils/index.js';

const INITIAL_DOCUMENT_TITLE = document.title;

const getDocumentTitle = () => {
  return document.title;
};

const setDocumentTitle = (content) => {
  document.title = content;
};

// JSDoc: https://jsdoc.app/

/**
 * 문서 제목 GET/SET 함수
 * @param {string | function} content 문서 제목 콘텐츠
 * @returns {string | undefined}
 */
export const documentTitle = (content) => {
  if (!content) {
    return getDocumentTitle();
  } else {
    let willContent = content;
    if (isFunction(content)) {
      willContent = content(INITIAL_DOCUMENT_TITLE);
    }
    setDocumentTitle(willContent);
  }
};
