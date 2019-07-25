import React from 'react';

import './JobTitle.css';

export const JobTitle = props => (
  <div className="job-title">
    <span>{props.jobTitle}</span>
  </div>
);
