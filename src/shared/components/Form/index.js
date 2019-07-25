import React from 'react';

export const Form = props => (
  <form autoComplete="off" {...props}>
    {props.children}
  </form>
);
