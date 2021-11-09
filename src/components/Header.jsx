import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

import '../styles/Header.css';

function Header() {
  const { name, changeFilter } = useContext(PlanetsContext);

  return (
    <div className="filter-container">
      <h1> Star Wars</h1>
      <p> Planets Search </p>
      <input
        className="search-input"
        type="search"
        data-testid="name-filter"
        id="filterByName"
        placeholder="Filtrar por Nome"
        value={ name }
        onChange={ changeFilter }
      />
    </div>
  );
}

export default Header;
