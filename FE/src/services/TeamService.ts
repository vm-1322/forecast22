import http from './http';
import { ITeam } from '../types';

const getAll = () => {
  return http.get('/teams');
};

const TeamService = {
  getAll,
};

export default TeamService;
