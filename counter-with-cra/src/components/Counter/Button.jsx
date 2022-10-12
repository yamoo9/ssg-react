import classNames from 'classnames';
import styles from './Button.module.css';

export function CountButton({ className, children, ...restProps }) {
  return (
    <button
      type="button"
      className={classNames(styles.element, className)}
      {...restProps}
    >
      {children}
    </button>
  );
}
