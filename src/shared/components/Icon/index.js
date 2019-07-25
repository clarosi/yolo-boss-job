import React from 'react';

export const Icon = props => {
  const { color = '#2379ea', children, isPadded, className } = props;
  let margin = '0 7px';
  if (isPadded) margin = '4px 15px 0 0';

  return (
    <i style={{ color, margin }} className={className} aria-hidden="true">
      {children}
    </i>
  );
};
