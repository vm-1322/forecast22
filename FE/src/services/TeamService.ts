import http from './http';

const getAll = () => {
  return http.get('/teams');
};

const TeamService = {
  getAll,
};

export default TeamService;
