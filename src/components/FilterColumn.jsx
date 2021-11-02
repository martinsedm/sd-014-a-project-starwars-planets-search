import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function FilterColumn() {
  const { currentFilters, setCurrentFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCurrentFilters({
      ...currentFilters,
      column: value,
    });
  };

  const filterOptions = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <select
      data-testid="column-filter"
      name="column-filter"
      onChange={ handleChange }
    >
      {filterOptions.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      ))}
    </select>
  );
}
