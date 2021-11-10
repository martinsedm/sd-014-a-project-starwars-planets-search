import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <header>
      <h2>Projeto Star Wars | Trybe</h2>
      <label htmlFor="filterByName">
        <input
          type="text"
          id="filterByName"
          data-testid="name-filter"
          placeholder="filtrar por nome"
          onChange={ handleChange }
        />
      </label>
    </header>
  );
}

export default Header;
