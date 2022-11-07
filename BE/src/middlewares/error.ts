import express, { NextFunction } from 'express';

export const errorHandler = (
  err: ErrorEvent,
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const status = err.error.statusCode || 500;
  const message = err.error.message;
  const data = err.error.data;

  res.status(status).json({ message: message, data: data });
};
