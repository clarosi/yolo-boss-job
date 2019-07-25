import React from 'react';

import './Button.css';

export const Button = props => (
  <button type="button" className="button" {...props}>
    {props.children}
  </button>
);
