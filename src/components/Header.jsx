import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Header() {
  const { handleChange, name } = useContext(PlanetsContext);
  return (
    <header>
      <h1>Star Wars Planet Search</h1>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={ name }
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </header>
  );
}
