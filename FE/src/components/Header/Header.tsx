import React from 'react';

import { StyledHeader } from './HeaderStyled';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <a href='https://www.qatar2022.qa/' target='_blank'>
        FIFA WORLD CUP QATAR 2022
      </a>
    </StyledHeader>
  );
};

export default Header;
