import React from 'react';

import { StyledTeams, StyledTeamsTitle } from './TeamsStyled';

export interface TeamsProps {
  className?: string;
}

const Teams: React.FC<TeamsProps> = ({ className }) => {
  return (
    <StyledTeams className={className}>
      <StyledTeamsTitle>National teams</StyledTeamsTitle>
    </StyledTeams>
  );
};

export default Teams;
