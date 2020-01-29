import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-dr.herokuapp.com/'
});

export default api;