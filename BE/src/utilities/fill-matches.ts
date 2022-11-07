import * as db from '../db';
import { IMatch } from '../types';

const MatchesModel = require('../models/MatchModel');
const matches = require('../data/matches.json');

const createTeams = async () => {
  MatchesModel.deleteMany({}, () => {});

  MatchesModel.insertMany(
    matches.map((item: IMatch) => ({
      date: item.date,
      team1: item.team1,
      team2: item.team2,
      result1: item.result1,
      result2: item.result2,
      stage: {
        kind: item.stage.kind,
        groupRound: item.stage.groupRound,
      },
      matchStatus: item.matchStatus,
      forecast: item.forecast,
    }))
  );
};

const config = require('../config')[process.env.NODE_ENV || 'development'];

db.connect(config.database.dsn)
  .then(() => {
    console.log('Connected to MongoDB');

    createTeams()
      .then(() => {
        console.log('Matches were created!');
      })
      .catch((err) => {
        console.log('Failed to save match:', err);
      });
  })
  .catch((err: Error) => {
    console.error(err);
  });
