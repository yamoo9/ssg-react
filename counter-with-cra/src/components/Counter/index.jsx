import { CountWrapper } from './Wrapper';
import { CountButton } from './Button';
import { CountDisplay } from './Display';

export default function Counter(props) {
  return (
    <CountWrapper>
      <CountButton onClick={props.onUpdate}>-</CountButton>
      <CountDisplay>{props.count}</CountDisplay>
      <CountButton onClick={props.onUpdate}>+</CountButton>
    </CountWrapper>
  );
}
