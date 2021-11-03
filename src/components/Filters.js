import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;

    setFilters({
      ...filters,
      name: value,
    });
    setName(value);
  };

  return (
    <input
      data-testid="name-filter"
      onChange={ handleChange }
      placeholder="Filter by name"
      type="text"
      value={ name }
    />
  );
}

export default Filters;
