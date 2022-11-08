import React, { useEffect, useState } from 'react';

import { ITeam } from '../../types';
import TeamService from '../../services/TeamService';
import {
  StyledTeams,
  StyledTeamItem,
  StyledTeamItemFlag,
  StyledTeamItemName,
  StyledTeamsList,
  StyledTeamsTitle,
} from './TeamsStyled';

export interface TeamsProps {
  className?: string;
}

const Teams: React.FC<TeamsProps> = ({ className }) => {
  const [teams, setTeams] = useState<Array<ITeam>>([]);

  const retrieveTeams = () => {
    TeamService.getAll()
      .then((response) => {
        setTeams(
          response.data.teams.sort((a: ITeam, b: ITeam) =>
            a.name.localeCompare(b.name)
          )
        );
      })
      .catch((err: Error) => console.log(err));
  };

  const renderTeamItem = (team: ITeam) => {
    return (
      <StyledTeamItem key={team._id}>
        <StyledTeamItemFlag href={team.link}>
          <img src={team.flag} alt={team.code} />
        </StyledTeamItemFlag>
        <StyledTeamItemName>{team.name}</StyledTeamItemName>
      </StyledTeamItem>
    );
  };

  useEffect(() => {
    retrieveTeams();
  }, []);

  return (
    <StyledTeams className={className}>
      <StyledTeamsTitle>National teams</StyledTeamsTitle>
      <StyledTeamsList>{teams.map(renderTeamItem)}</StyledTeamsList>
    </StyledTeams>
  );
};

export default Teams;
