import { useState, useEffect } from 'react';
import { shape, exact, string, bool, number, oneOfType } from 'prop-types';
import CountDisplay from './CountDisplay';
import CountButton from './CountButton';
import CountContainer from './CountContainer';

export function Counter({
  id,
  min,
  max,
  current,
  step,
  buttonProps: { plus, minus },
  onUpdate,
  ...restProps
}) {
  const [count, setCount] = useState(Number(current));

  useEffect(() => {
    onUpdate?.(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleDecrement = () => {
    let updateCount = count - step;
    setCount(updateCount < min ? min : updateCount > max ? max : updateCount);
  };

  const handleIncrement = () => {
    let updateCount = count + step;
    setCount(updateCount < min ? min : updateCount > max ? max : updateCount);
  };

  let isMinValue = count <= min;
  let isMaxValue = count >= max;

  return (
    <CountContainer id={id} {...restProps}>
      <CountButton
        mode="minus"
        label={minus.label}
        isMin={isMinValue}
        onClick={handleDecrement}
      />
      <CountDisplay>{count}</CountDisplay>
      <CountButton
        mode="plus"
        label={plus.label}
        isMax={isMaxValue}
        onClick={handleIncrement}
      />
    </CountContainer>
  );
}

const StringOrNumberType = oneOfType([number, string]);

const ButtonType = shape({
  label: string,
  withTitle: bool,
});

const ButtonPropsType = exact({
  minus: ButtonType,
  plus: ButtonType,
});

Counter.defaultProps = {
  buttonProps: {
    minus: {
      label: '카운트 감소',
      withTitle: true,
    },
    plus: {
      label: '카운트 증가',
      withTitle: true,
    },
  },
  min: 0,
  max: 10,
  current: 0,
  step: 1,
};

Counter.propTypes = {
  id: string.isRequired,
  buttonProps: ButtonPropsType,
  min: StringOrNumberType,
  max: StringOrNumberType,
  current: StringOrNumberType,
  step: StringOrNumberType,
};
