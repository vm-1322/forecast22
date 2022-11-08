import express, { NextFunction } from 'express';

import TeamModel from '../models/TeamModel';

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
      if (!err.error.statusCode) {
        err.error.statusCode = 500;
      }
      next(err);
    });
};
