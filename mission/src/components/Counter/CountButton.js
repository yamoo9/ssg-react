import { forwardRef } from 'react';
import styled from 'styled-components/macro';
import { bool, oneOf, string } from 'prop-types';
import { ReactComponent as SvgIconMinus } from 'assets/icons/minus.svg';
import { ReactComponent as SvgIconPlus } from 'assets/icons/plus.svg';

const CountButton = forwardRef(function CountButton(
  { type, label, withTitle, mode, isMin, isMax, className, ...restProps },
  ref
) {
  const isPlusMode = mode.includes('plus');
  return (
    <Button
      ref={ref}
      type={type}
      aria-label={label}
      title={withTitle && label}
      disabled={isPlusMode ? isMax : isMin}
      {...restProps}
    >
      {isPlusMode ? <SvgIconPlus /> : <SvgIconMinus />}
    </Button>
  );
});

CountButton.defaultProps = {
  type: 'button',
  withTitle: true,
  mode: 'plus',
  isMin: false,
  isMax: false,
};

CountButton.propTypes = {
  type: string,
  label: string.isRequired,
  withTitle: bool,
  mode: oneOf(['plus', 'minus']),
  isMin: bool,
  isMax: bool,
  className: string,
};

export default CountButton;

/* -------------------------------------------------------------------------- */

const Button = styled.button`
  user-select: none;
  cursor: pointer;
  line-height: 1;
  border: 0;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  color: inherit;

  svg {
    pointer-events: none;
    fill: currentColor;
    transform: scale(0.6);
  }

  :hover {
    transform: scale(1.2);
  }

  :focus {
    outline: none;
    background: #d9d9d9;
    &:not(:focus-visible) {
      box-shadow: none;
      background: transparent;
    }
  }

  :active {
    transform: scale(0.98);
    transition-duration: 0.1s;
    background: transparent;
  }

  :disabled {
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`;
