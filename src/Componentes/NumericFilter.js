import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const { selectedFilters, filters, setFilter } = useContext(PlanetsContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        column: value,
      }],
    });
  };

  const handleChangeComparison = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        comparison: value,
      }],
    });
  };

  const handleChangeValue = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        value,
      }],
    });
  };

  const handleClick = () => {
    selectedFilters();
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="number">
        <input
          name="number"
          type="Number"
          onChange={ handleChangeValue }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
