import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { StyledMain } from './MainStyled';
import Home from '../Home';
import Matches from '../Matches';
import Teams from '../Teams';

export interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <StyledMain className={className}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/matches' element={<Matches />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
