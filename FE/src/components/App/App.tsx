import React from 'react';

import { StyledApp } from './AppStyled';
import Header from '../Header';
import Navigation from '../Navigation';
import Main from '../Main';
import Footer from '../Footer';
import { INavigationItem } from '../../types';

const App: React.FC = () => {
  const items: INavigationItem[] = [
    { link: { label: 'Home', value: '/' } },
    { link: { label: 'Matches', value: '/matches' } },
    { link: { label: 'Teams', value: '/teams' } },
  ];

  return (
    <StyledApp>
      <Header />
      <Navigation items={items} />
      <Main />
      <Footer />
    </StyledApp>
  );
};

export default App;
