import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://search.bossjob.com/api/v1/',
  timeout: 9000
});

const errObj = (isError, error) => {
  return { isError, error };
};

export const getRequest = url => {
  return axiosInstance
    .get(url)
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};
