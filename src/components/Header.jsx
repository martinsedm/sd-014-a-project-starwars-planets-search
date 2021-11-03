import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filters from './Filters';

export default function Header() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
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
      <Filters />
    </div>
  );
}
