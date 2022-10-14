import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';

export default function CartList({ products, total, onUpdate }) {
  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={onUpdate} />
      ))}
      <CartFooter total={total} />
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
