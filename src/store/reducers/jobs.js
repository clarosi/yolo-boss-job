import { GET_JOBS, SET_LOADING_STATUS } from '../actions/types';

const INITIAL_STATE = {
  jobs: [],
  page: 0,
  size: 0,
  sort: 0,
  total_num: 0,
  total_pages: 0,
  loading: false
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_JOBS:
      const { jobs, page, size, sort, total_num, total_pages } = action.payload;
      return Object.assign({}, state, {
        jobs,
        page,
        size,
        sort,
        total_num,
        total_pages
      });
    case SET_LOADING_STATUS:
      return Object.assign({}, state, { loading: action.payload });
    default:
      return state;
  }
};

export default jobReducer;
