import './Button.css';

export const Button = ({ type, label, ...restProps }) => {
  return (
    <button
      type={type}
      className="Button"
      aria-label={label}
      title={label}
      {...restProps}
    />
  );
};

Button.defaultProps = {
  type: 'button',
};
