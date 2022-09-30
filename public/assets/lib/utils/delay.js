import { isFunction, isNumber } from './typeOf.js';
import { throwTypeError } from './throwError.js';

export function delay(...args) {
  const [firstArg, ...restArgs] = args;
  if (!firstArg || isNumber(firstArg)) {
    let timeout = firstArg ?? 1000;
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  if (isFunction(firstArg)) {
    const [timeout] = restArgs; /* [number, ...] */
    return setTimeout(firstArg /* callback */, timeout ?? 1000);
  }
}
