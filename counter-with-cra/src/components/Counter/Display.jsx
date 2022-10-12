import { number, string } from 'prop-types';

export function CountDisplay({ as: ComponentName, children }) {
  return <ComponentName>{children}</ComponentName>;
}

CountDisplay.defaultProps = {
  as: 'output',
};

CountDisplay.propTypes = {
  as: string,
  children: number.isRequired,
};
