export const debounce = (callback, delay = 300) => {
  let clearDelayid;
  return (...args) => {
    clearTimeout(clearDelayid);
    clearDelayid = setTimeout(callback.bind(this, ...args), delay);
  };
};
