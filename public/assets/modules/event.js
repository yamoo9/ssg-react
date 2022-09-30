export const on = (element, type, listener) => {
  element.addEventListener(type, listener);
  // cleanup function
  return () => element.removeEventListener(type, listener);
};