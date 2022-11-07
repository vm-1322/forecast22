import * as db from '../db';

const TeamModel = require('../models/TeamModel');
const teams = require('../data/teams.json');

const createTeams = async () => {
  TeamModel.deleteMany({}, () => {});

  TeamModel.insertMany(teams);
};

const config = require('../config')[process.env.NODE_ENV || 'development'];

db.connect(config.database.dsn)
  .then(() => {
    console.log('Connected to MongoDB');

    createTeams()
      .then(() => {
        console.log('Teams were created!');
      })
      .catch((err) => {
        console.log('Failed to save team:', err);
      });
  })
  .catch((err: Error) => {
    console.error(err);
  });
