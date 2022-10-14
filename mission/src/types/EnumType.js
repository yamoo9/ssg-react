import { oneOf } from 'prop-types';

export const EnumType = (...types) => oneOf(types);
