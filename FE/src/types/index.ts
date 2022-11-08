export interface ILink {
  label: string;
  value: string;
}

export interface INavigationItem {
  link: ILink;
  innerLinks?: ILink[];
}

export interface INavigationProps {
  items: Array<INavigationItem>;
  activePath?: string;
  className?: string;
  ExternalLinkIcon?: React.FC;
}

export interface IMatch {
  date: number;
  team1: string;
  team2: string;
  result1: string;
  result2: string;
  stage: {
    kind: string;
    _id?: string;
    groupRound: string;
    round: number;
  };
  matchStatus: string;
  forecats: boolean;
  linkToBet: string;
  _id?: string;
}

export interface ITeam {
  code: string;
  name: string;
  flag?: string;
  link?: string;
  _id?: string;
}
