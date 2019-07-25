import React from 'react';

import './JobsFound.css';

export const JobsFound = props => (
  <div className="jobs-found">{`${props.jobs} jobs found`}</div>
);
