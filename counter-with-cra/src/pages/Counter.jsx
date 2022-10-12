// stateless component
// functional component

import { A11yHidden } from 'components/A11yHidden/A11yHidden';

export default function CounterPage(props) {
  return (
    <div id="counter-page">
      <h1>Counter ({props.count})</h1>
      <A11yHidden className={1922}>화면에 표시되는가?</A11yHidden>
    </div>
  );
}
