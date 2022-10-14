import styled from 'styled-components/macro';
import CartTitle from './CartTitle';
import CartList from './CartList';

export function Cart({ title, products, total, onUpdate }) {
  return (
    <Container>
      <CartTitle>{title}</CartTitle>
      <CartList products={products} total={total} onUpdate={onUpdate} />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;

  @media (min-width: 50em) {
    border: 6px solid #232323;
    border-radius: 12px;
    box-shadow: 0 9px 7px rgba(0, 0, 0, 0.2);
  }
`;
