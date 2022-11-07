import React from 'react';

import { StyledFooter } from './FooterStyled';

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <StyledFooter className={className} />;
};

export default Footer;
