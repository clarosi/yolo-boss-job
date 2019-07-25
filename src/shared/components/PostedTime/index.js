import React from 'react';

import './PostedTime.css';

export const PostedTime = props => (
  <div className="posted-time">{`${new Date(
    props.postedTime
  ).getHours()} hours ago`}</div>
);
