import React from 'react';

import Logo from '../../../assets/images/Logo.svg';
import './Header.css';

export const Header = () => (
  <header className="header">
    <a href="/">
      <img src={Logo} width="120" alt="Bossjob" />
    </a>
  </header>
);
