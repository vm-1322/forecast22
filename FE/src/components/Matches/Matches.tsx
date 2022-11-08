import React, { useEffect, useState } from 'react';

import { IMatch, ITeam } from '../../types';
import MatchService from '../../services/MatchService';
import TeamService from '../../services/TeamService';
import {
  StyledMatches,
  StyledMatchItem,
  StyledMatchItemDateTime,
  StyledMatchItemTeam,
  StyledMatchItemTeamFlag,
  StyledMatchItemTeamName,
  StyledMatchItemTeams,
  StyledMatchesList,
} from './MatchesStyled';

export interface MatchesProps {
  className?: string;
}

const Matches: React.FC<MatchesProps> = ({ className }) => {
  const [teams, setTeams] = useState<Array<ITeam>>([]);
  const [matches, setMatches] = useState<Array<IMatch>>([]);

  const FormatDateTime = (moment: number) => {
    const date = new Date(moment).toString();

    return `${date.substring(8, 10)} ${date.substring(4, 7)},  ${date.substring(
      15,
      21
    )}`;
  };

  const retrieveMatches = () => {
    MatchService.getAll()
      .then((response) => {
        setMatches(
          response.data.matches.sort((match1: IMatch, match2: IMatch) => {
            let resultSort = match1.date - match2.date;

            if (resultSort === 0) {
              resultSort = match1.stage.kind.localeCompare(match2.stage.kind);

              if (
                resultSort === 0 &&
                match1.stage.round &&
                match2.stage.round
              ) {
                let resultSort = match1.stage.round - match2.stage.round;
              }
            }

            return resultSort;
          })
        );
      })
      .catch((err: Error) => console.log(err));
  };

  const retrieveTeams = () => {
    TeamService.getAll()
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((err: Error) => console.log(err));
  };

  const renderMatchItem = (match: IMatch) => {
    const findTeam = (code: string) =>
      teams.find((item: ITeam) => item.code === code);
    const team1 = findTeam(match.team1) as ITeam;
    const team2 = findTeam(match.team2) as ITeam;

    return (
      <StyledMatchItem key={match._id} href={match.linkToBet}>
        <StyledMatchItemDateTime>
          {FormatDateTime(match.date)}
        </StyledMatchItemDateTime>
        <StyledMatchItemTeams>
          <StyledMatchItemTeam>
            <StyledMatchItemTeamFlag>
              <img src={team1.flag} alt={team1.code} />
            </StyledMatchItemTeamFlag>
            <StyledMatchItemTeamName>{team1.name}</StyledMatchItemTeamName>
          </StyledMatchItemTeam>
          <StyledMatchItemTeam>
            <StyledMatchItemTeamFlag>
              <img src={team2.flag} alt={team2.code} />
            </StyledMatchItemTeamFlag>
            <StyledMatchItemTeamName>{team2.name}</StyledMatchItemTeamName>
          </StyledMatchItemTeam>
        </StyledMatchItemTeams>
      </StyledMatchItem>
    );
  };

  useEffect(() => {
    retrieveTeams();
    retrieveMatches();
  }, []);

  return (
    <StyledMatches>
      <StyledMatchesList>{matches.map(renderMatchItem)}</StyledMatchesList>
    </StyledMatches>
  );
};

export default Matches;
