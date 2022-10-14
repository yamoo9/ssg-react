import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export const CountButton = React.memo(function CountButton({
  className,
  children,
  ...restProps
}) {
  return (
    <button
      type="button"
      className={classNames(styles.element, className)}
      {...restProps}
    >
      {children}
    </button>
  );
});
