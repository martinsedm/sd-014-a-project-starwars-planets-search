import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import CurrentFilters from './CurrentFilters';
import FilterByNumericValues from './FilterByNumericValues';
import Order from './Order';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [name, setName] = useState('');

  const handleNameChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    setName(target.value);
  };

  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ handleNameChange }
        placeholder="Filter by name"
        type="text"
        value={ name }
      />
      <FilterByNumericValues />
      <Order />
      <CurrentFilters />
    </>
  );
}

export default Filters;
