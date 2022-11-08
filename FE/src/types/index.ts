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

export interface ITeam {
  code: string;
  name: string;
  flag?: string;
  link?: string;
  _id?: string;
}
