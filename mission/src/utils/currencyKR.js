import { numberWithComma } from './numberWithComma';

export function currencyKR(n) {
  return `${numberWithComma(n)}원`;
}
