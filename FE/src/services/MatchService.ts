import http from './http';

const getAll = () => {
  return http.get('/matches');
};

const MatchService = {
  getAll,
};

export default MatchService;
