import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Header() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <div>
      <header>
        <h1>Star Wars Planet Search</h1>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            onChange={ handleChange }
            data-testid="name-filter"
          />
        </label>
      </header>
    </div>
  );
}
