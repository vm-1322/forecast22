import React from 'react';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderText,
} from './HeaderStyled';

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <a href='https://www.qatar2022.qa/' target='_blank'>
        <StyledHeaderLogo>
          <img src='/images/logo.png' alt='Qatar 2022' />
        </StyledHeaderLogo>
        <StyledHeaderText>FIFA WORLD CUP QATAR 2022</StyledHeaderText>
      </a>
    </StyledHeader>
  );
};

export default Header;
