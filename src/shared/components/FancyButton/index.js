import React from 'react';

import './FancyButton.css';

export const FancyButton = props => (
  <div className="fancy-button" {...props}>
    {props.children}
  </div>
);
