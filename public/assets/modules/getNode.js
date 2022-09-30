export const getNodeList = (selector, context = document) => context.querySelectorAll(selector);
export const getNode = (...args) => getNodeList(...args)[0];
