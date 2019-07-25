import React from 'react';

import './Img.css';
import src from '../../../assets/images/company_logo.jpg';

export const Img = props => (
  <div>
    <img src={props.src || src} className="img" alt="Logo" {...props} />
  </div>
);
