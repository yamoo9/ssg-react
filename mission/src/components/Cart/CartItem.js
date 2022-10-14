import { any, exact, func, number, string } from 'prop-types';
import styled from 'styled-components/macro';
import { Counter } from 'components';
import { currencyKR } from 'utils';

export default function CartItem({
  product: { id, photo, name, price, amount, maxAmount },
  onUpdate,
  ...restProps
}) {
  return (
    <Container {...restProps}>
      <Photo src={photo} alt="" />
      <Info>
        <Name>{name}</Name>
        <Price>{currencyKR(price)}</Price>
      </Info>
      <Amount>
        <Counter
          id={id}
          min={1}
          current={amount}
          max={maxAmount > 0 ? maxAmount : 50}
          style={{ transform: 'scale(0.75)' }}
          onUpdate={(count) => onUpdate(id, count)}
        />
      </Amount>
    </Container>
  );
}

CartItem.propTypes = {
  product: exact({
    id: string,
    photo: string,
    name: string,
    price: number,
    amount: number,
    maxAmount: number,
  }).isRequired,
  onUpdate: func,
  restProps: any,
};

/* -------------------------------------------------------------------------- */

const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0.5em;
`;

const Photo = styled.img`
  --size: 60px;

  flex: 0 0 var(--size);
  width: var(--size);
  height: var(--size);
  margin-right: 20px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.b`
  margin-right: 20px;
  font-size: 1.2rem;
  font-weight: normal;
  color: #595959;
`;

const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #111;
`;

const Amount = styled.div`
  flex: 1;
  text-align: right;
`;
