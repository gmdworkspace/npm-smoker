import axios from 'axios';

export const http = (url, method, data, headers) => {
  const request = {
    method: method.toLowerCase(),
    url: url,
    data: data,
    headers: headers

  };
  return axios(request);
};