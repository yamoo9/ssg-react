import React from 'react';

export function Button({ type = 'button', ...restProps }) {
  return <button type={type} {...restProps} />;
}
