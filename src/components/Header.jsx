import React from 'react';
import Search from './Search';
import '../css/Header.css';
import Filters from './Filters';

const Header = () => (
  <header>
    <h2 className="center">Starwars Planets Search</h2>
    <Search />
    <Filters />
  </header>
);

export default Header;
