import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:7700/api',
  headers: {
    'Content-type': 'application/json',
  },
});
