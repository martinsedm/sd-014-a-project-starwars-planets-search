import React, { useContext } from 'react';
import PlanetContext from '../context/planetContext';

export default function FilterInput() {
  const { filters, setFilters } = useContext(PlanetContext);
  const { filterByName: { name } } = filters;

  const handleChange = (e) => {
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <form>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
        placeholder="Search by name"
      />
    </form>
  );
}
