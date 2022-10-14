import { arrayOf, shape, string } from 'prop-types';

export const GatewayCardLinkType = shape({
  text: string,
  cheon: string,
  href: string,
});

export const GatewayCardType = shape({
  id: string,
  title: arrayOf(string),
  link: GatewayCardLinkType,
  cover: string,
}).isRequired;

export const GatewayCardListType = arrayOf(GatewayCardType);
