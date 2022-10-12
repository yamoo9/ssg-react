import { string } from 'prop-types';

export function CountWrapper({ as: ComponentName, children }) {
  return <ComponentName>{children}</ComponentName>;
}

CountWrapper.defaultProps = {
  as: 'div',
};

CountWrapper.propTypes = {
  as: string,
};
