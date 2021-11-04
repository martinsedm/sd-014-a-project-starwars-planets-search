import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumericValues() {
  const { filters, setFilters, numericValuesFilter } = useContext(PlanetsContext);

  const handleColumn = ({ target: { value } }) => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [
          {
            ...filters.filterByNumericValues[0], // DOUGAO MONSTRO
            column: value,
          },
        ],
      },
    );
  };

  const handleComparison = ({ target: { value } }) => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [
          {
            ...filters.filterByNumericValues[0], // DOUGAO MONSTRO
            comparison: value,
          },
        ],
      },
    );
  };

  const handleValue = ({ target: { value } }) => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: [
          {
            ...filters.filterByNumericValues[0], // DOUGAO MONSTRO
            value,
          },
        ],
      },
    );
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues[0],
      },
    });
    numericValuesFilter();
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ filters.filterByNumericValues.column }
        onChange={ handleColumn }
      >
        <option data-testid="population">population</option>
        <option data-testid="orbital_period">orbital_period</option>
        <option data-testid="diameter">diameter</option>
        <option data-testid="rotation_period">rotation_period</option>
        <option data-testid="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ filters.filterByNumericValues.comparison }
        onChange={ handleComparison }
      >
        <option data-testid="maior que">maior que</option>
        <option data-testid="menor que">menor que</option>
        <option data-testid="igual a">igual a</option>
      </select>

      <input
        type="text"
        data-testid="value-filter"
        value={ filters.filterByNumericValues.value }
        onChange={ handleValue }
        placeholder="valor"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterByNumericValues;
