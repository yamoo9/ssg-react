export const throwError = (message) => {
  throw new Error(message);
};

export const throwSyntaxError = (message) => {
  throw new SyntaxError(message);
};

export const throwReferenceError = (message) => {
  throw new ReferenceError(message);
};

export const throwTypeError = (message) => {
  throw new TypeError(message);
};
