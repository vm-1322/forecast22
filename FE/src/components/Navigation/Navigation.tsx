import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { INavigationItem, INavigationProps } from '../../types';
import {
  StyledNav,
  StyledNavItem,
  StyledNavItems,
  StyledNavUser,
  StyledNavUserItem,
} from './NavigationStyled';

const Navigation: React.FC<INavigationProps> = ({
  items,
  activePath,
  className,
  ExternalLinkIcon,
}) => {
  const [currentPath, setCurrentPath] = useState(
    activePath ? activePath : window.location.pathname
  );

  const currentUser = {
    username: 'username',
  };

  const logOut = () => console.log('Log Out');

  const renderNavigationItem = (item: INavigationItem, itemIndex: number) => {
    return (
      <StyledNavItem
        key={itemIndex}
        isActive={item.link.value === currentPath}
        onClick={() => setCurrentPath(item.link.value)}
      >
        <Link to={item.link.value}>{item.link.label}</Link>
      </StyledNavItem>
    );
  };

  const navigationItems = items?.map(renderNavigationItem);

  return (
    <StyledNav className={className}>
      <StyledNavItems>{navigationItems}</StyledNavItems>
      <StyledNavUser>
        {currentUser.username ? (
          <React.Fragment>
            <StyledNavUserItem>
              <Link to={'/profile'}>{currentUser.username}</Link>
            </StyledNavUserItem>
            <StyledNavUserItem>
              <Link to={'/logout'} onClick={logOut}>
                Log Out
              </Link>
            </StyledNavUserItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <StyledNavUserItem>
              <Link to={'/login'}>Log In</Link>
            </StyledNavUserItem>
            <StyledNavUserItem>
              <Link to={'/register'} onClick={logOut}>
                Sign Up
              </Link>
            </StyledNavUserItem>
          </React.Fragment>
        )}
      </StyledNavUser>
    </StyledNav>
  );
};

export default Navigation;
