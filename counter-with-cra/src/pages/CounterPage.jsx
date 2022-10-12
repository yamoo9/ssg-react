import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import Counter from 'components/Counter';

function CounterPage({ count, onUpdate }) {
  return (
    <div id="counter-page">
      <A11yHidden as="h2">Counter 컴포넌트</A11yHidden>
      <Counter count={count} onUpdate={onUpdate} />
    </div>
  );
}

export default CounterPage;
