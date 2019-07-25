import React from 'react';

import { PAGE, PAGER_SIZE } from '../../constants/number';
import './Pagination.css';

export const Pagination = props => {
  const { begin, end, onPagination } = props;

  let stop = begin + PAGER_SIZE;
  if (stop >= end) stop -= begin;

  return (
    <ul className="pagination">
      <li>
        <a
          href="#!"
          className={PAGE !== begin ? 'enabled' : 'disabled'}
          onClick={() => onPagination(PAGE)}
        >
          {'<'}
        </a>
      </li>
      {pager({ begin, stop, onPagination })}
      <li>...</li>
      <li>
        <a href="#!" onClick={() => onPagination(end)}>
          {end}
        </a>
      </li>
      <li>
        <a
          href="#!"
          className={begin === end ? 'disabled' : 'enabled'}
          onClick={() => onPagination(end)}
        >
          {'>'}
        </a>
      </li>
    </ul>
  );
};

const pager = ({ begin, stop, onPagination }) => {
  const aryPage = [];
  while (begin < stop) {
    aryPage.push(begin++);
  }

  return aryPage.map((page, idx) => (
    <li className={idx === 0 ? 'selected' : ''} key={page}>
      <a href="#!" onClick={() => onPagination(page)}>
        {page}
      </a>
    </li>
  ));
};
