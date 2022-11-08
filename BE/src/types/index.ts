export enum Stages {
  GS = 'Group Stage',
  PO = 'Play Off',
}

export enum Rounds {
  R16 = '1/8 Final',
  QF = '1/4 Final',
  SF = '1/2 Final',
  Third = '3rd place',
  F = 'Final',
}

export interface ITeam {
  code: string;
  name: string;
  flag?: string;
  link?: string;
}

export enum MatchStatus {
  Forecast = 'Forecast',
  Finished = 'Finished',
  Canceled = 'Canceled',
}

export interface IMatch {
  date: number;
  team1: string;
  team2: string;
  result1: string;
  result2: string;
  stage: {
    kind: keyof typeof Stages;
    groupRound: string | keyof typeof Rounds;
    round: number;
  };
  matchStatus: keyof typeof MatchStatus;
  forecast: boolean;
  linkToBet: string;
}
