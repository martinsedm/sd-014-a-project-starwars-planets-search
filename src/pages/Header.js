import React from 'react';
import Filter from '../components/Filter';
import '../css/Header.css';

const Header = () => (
  <header>
    <h2 className="center">Starwars Planets Search</h2>
    <Filter />
  </header>
);

export default Header;
