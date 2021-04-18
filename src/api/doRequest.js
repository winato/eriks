import axios from 'axios';

const doRequest = ({
  method = 'post',
  url,
  data,
  params,
}) => {
  return axios({
    baseURL: 'http://5c35e7f96fc11c0014d32fcd.mockapi.io/',
    method,
    url,
    data,
    params,
  })
}

export default doRequest;
