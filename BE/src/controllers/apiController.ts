import express, { NextFunction } from 'express';

import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

const checkStatusCode = (err: ErrorEvent) => {
  if (!err.error.statusCode) {
    err.error.statusCode = 500;
  }
};

export const getMatches = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  MatchModel.find()
    .then((matches) => {
      res.status(200).json({
        message: 'Fetched matches successfully.',
        matches: matches,
      });
    })
    .catch((err: ErrorEvent) => {
      checkStatusCode(err);
      next(err);
    });
};

export const getTeams = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  TeamModel.find()
    .then((teams) => {
      res.status(200).json({
        message: 'Fetched teams successfully.',
        teams: teams,
      });
    })
    .catch((err: ErrorEvent) => {
      checkStatusCode(err);
      next(err);
    });
};
