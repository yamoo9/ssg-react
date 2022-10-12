import React from 'react';

export const A11yHidden = ({ as: ComponentName, children, className }) => {
  let combinedClasses = `A11yHidden ${className}`.trim();
  // React API
  // return React.createElement(as, {
  //   className: combinedClasses,
  //   'data-testid': 'a11y-hidden'
  // }, children);

  // JSX
  return <ComponentName className={combinedClasses} data-testid="a11y-hidden">{children}</ComponentName>;
};

A11yHidden.defaultProps = {
  as: 'span',
  className: ''
}