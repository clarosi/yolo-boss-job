import React from 'react';

import './Box.css';

export const Box = props => (
  <div className="box" {...props}>
    {props.children}
  </div>
);
