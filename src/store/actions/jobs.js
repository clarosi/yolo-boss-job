import { dispatchAction } from '../../shared/utils';

import { GET_JOBS } from './types';
import { PAGE, PAGE_SIZE } from '../../shared/constants/number';

export const getJobs = ({
  query = 'system',
  size = PAGE_SIZE,
  page = PAGE
}) => {
  return dispatch => {
    const obj = {
      dispatch,
      url: `search/job_filter?size=${size}&page=${page}&query=${query}'`,
      type: GET_JOBS
    };
    dispatchAction(obj);
  };
};
