import React from 'react';

import './Icon.css';

export const Icon = props => {
  const { color = '#2379ea', children, isPadded, className } = props;
  let margin = '0 7px';
  if (isPadded) margin = '3px 15px 0 0';

  return (
    <i
      style={{ color, margin }}
      className={`${className} fa-icon`}
      aria-hidden="true"
    >
      {children}
    </i>
  );
};
