import styled from 'styled-components/macro';
import { currencyKR } from 'utils';

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  border-top: 1px solid #999;
  padding: 1.4em 1.4em 0;
  font-size: 1.2em;
  font-weight: bold;
`;

/* -------------------------------------------------------------------------- */

export default function CartTotal({ children }) {
  return <Total>구매 총액﹕{currencyKR(children)}</Total>;
}
