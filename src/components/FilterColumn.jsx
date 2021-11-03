import React, { useContext } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';

export default function FilterColumn() {
  const {
    currentFilters,
    setCurrentFilters,
    filters: { filterByNumericValues },
} = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setCurrentFilters({
      ...currentFilters,
      column: value,
    });
  };

  const filterOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const removeFilterOptions = () => {
    filterByNumericValues.forEach(({ column }) => {
      filterOptions.splice(filterOptions.indexOf(column), 1);
    });
    return filterOptions;
  };

  return (
    <select
      data-testid="column-filter"
      name="column-filter"
      onChange={ handleChange }
    >
      {removeFilterOptions().map((option) => (
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
