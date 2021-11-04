import React from 'react';

import '../App.css';
import starwars from '../assets/star-wars.svg';

const Header = () => (
  <header className="App-header">
    PROJETO&nbsp;
    <img alt="Star Wars Logo" src={ starwars } height="100" />
    &nbsp;PLANETS
  </header>
);

export default Header;
