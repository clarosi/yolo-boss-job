import React from 'react';

import './FormGroup.css';

export const FormGroup = props => {
  const { classNameIn, classNameOut, children } = props;

  return (
    <div className={`form-group ${classNameOut || ''}`}>
      <div className={`form-group-content ${classNameIn || ''}`}>
        {children}
      </div>
    </div>
  );
};
