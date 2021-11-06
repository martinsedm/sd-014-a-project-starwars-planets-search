import React, { useContext } from 'react';
import PlanetContext from '../context/Context';

export default function Filter() {
  const { setFilters, filters } = useContext(PlanetContext);

  return (
    <input
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => {
        setFilters({
          ...filters,
          filterByName: {
            name: value,
          },
        });
      } }
    />
  );
}
