import React from 'react';

import Logo from '../../../assets/images/Logo.svg';
import './Header.css';

export const Header = () => (
  <header className="header">
    <img src={Logo} width="120" alt="Bossjob" />
  </header>
);
