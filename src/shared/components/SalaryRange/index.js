import React from 'react';

import './SalaryRange.css';

export const SalaryRange = props => {
  const { salaryFrom, salaryTo } = props;

  return (
    <div className="salary-range">
      &#8369;
      {`${salaryFrom
        .toString()
        .substring(0, 2)}k - ${salaryTo.toString().substring(0, 2)}k`}
    </div>
  );
};
