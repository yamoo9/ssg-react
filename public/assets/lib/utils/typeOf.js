export const typeOf = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

export const isNull = (data) => typeOf(data) === 'null';
export const isUndefined = (data) => typeOf(data) === 'undefined';
export const isNumber = (data) => typeOf(data) === 'number' && !isNaN(data);
export const isBigInt = (data) => typeOf(data) === 'bigint' && !isNaN(data);
export const isString = (data) => typeOf(data) === 'string';
export const isBoolean = (data) => typeOf(data) === 'boolean';
export const isSymbol = (data) => typeOf(data) === 'symbol';
export const isFunction = (data) => typeOf(data) === 'function';
export const isArray = (data) => typeOf(data) === 'array';
export const isObject = (data) => typeOf(data) === 'object';
export const isRegExp = (data) => typeOf(data) === 'regexp';
export const isDate = (data) => typeOf(data) === 'date';
