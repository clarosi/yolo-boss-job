import { SET_LOADING_STATUS } from '../../store/actions/types';
import { getRequest } from './index';

export const dispatchAction = async ({ dispatch, url, type }) => {
  dispatch({ type: SET_LOADING_STATUS, payload: true });
  const result = await getRequest(url);
  dispatch({ type: SET_LOADING_STATUS, payload: false });

  if (result.error) {
    console.log(result);
    return;
  }

  const { jobs, page, size, sort, total_num, total_pages } = result.data;
  //console.log(obs, page, size, sort, total_num, total_pages);
  return dispatch({
    type,
    payload: { jobs, page, size, sort, total_num, total_pages }
  });
};
