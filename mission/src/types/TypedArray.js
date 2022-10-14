import { array, arrayOf, bool, func, number, object, string } from 'prop-types';

export const StringArrayType = arrayOf(string);
export const NumberArrayType = arrayOf(number);
export const BooleanArrayType = arrayOf(bool);
export const FunctionArrayType = arrayOf(func);
export const NestedArrayType = arrayOf(array);
export const ObjectArrayType = arrayOf(object);
