import { number } from 'prop-types';
import CartTotal from './CartTotal';

const CartFooter = ({ total, ...restProps }) => (
  <footer {...restProps}>
    <CartTotal>{total}</CartTotal>
  </footer>
);

CartFooter.propTypes = {
  total: number.isRequired,
};

export default CartFooter;
