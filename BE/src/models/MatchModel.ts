import { Schema, model } from 'mongoose';

import { IMatch } from '../types/index';

const MatchSchema = new Schema<IMatch>({
  date: {
    type: Number,
    required: true,
  },
  team1: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 3,
  },
  team2: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 3,
  },
  result1: {
    type: String,
    trim: true,
    maxlength: 2,
  },
  result2: {
    type: String,
    trim: true,
    maxlength: 2,
  },
  stage: {
    kind: {
      type: String,
      trim: true,
    },
    groupRound: {
      type: String,
      trim: true,
    },
  },
  matchStatus: {
    type: String,
    trim: true,
  },
  forecast: {
    type: Boolean,
  },
});

export default model('Match', MatchSchema);
