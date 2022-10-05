// default parameters
// arrow function
export const getElements = (selector, context = document) =>
  context.querySelectorAll(selector);

// rest parameters
// spread syntax
export const getElement = (...args) => getElements(...args)[0];
