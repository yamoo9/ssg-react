export const throttle = (callback, delay = 300) => {
  let isThrottling = false;

  return (...args) => {
    if (!isThrottling) {
      callback.apply(this, args);
      isThrottling = true;
      setTimeout(() => (isThrottling = false), delay);
    }
  };
};
