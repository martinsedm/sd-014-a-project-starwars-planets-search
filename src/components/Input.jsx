import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { setFilter } = useContext(PlanetsContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filter by name"
      onChange={ handleChange }
    />
  );
}

export default Input;
