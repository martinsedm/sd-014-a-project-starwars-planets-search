import React from 'react';

import SearchInput from './SearchInput';
import SearchBar from './SearchBar';

import '../styles/Header.css';

function Header() {
  return (
    <div className="filter-container">
      <h1> Star Wars</h1>
      <p> Planets Search </p>
      <SearchInput />
      <SearchBar />
    </div>
  );
}

export default Header;
