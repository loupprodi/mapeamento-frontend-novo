import axios from 'axios';

const BASE_API = 'http://10.0.2.2:8080/';

const apiFetch = axios.create({
  baseURL: BASE_API,
  responseType: 'json',
});

export default apiFetch;
