import classes from './A11yHidden.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const A11yHidden = ({
  as: ComponentName,
  children,
  className,
  ...restProps
}) => {
  return (
    <ComponentName
      className={classNames(classes.element, className)}
      {...restProps}
    >
      {children}
    </ComponentName>
  );
};

A11yHidden.defaultProps = {
  as: 'span',
  className: '',
};

A11yHidden.propTypes = {
  // 유효성 검사(validation function check)
  className: PropTypes.string,
};
