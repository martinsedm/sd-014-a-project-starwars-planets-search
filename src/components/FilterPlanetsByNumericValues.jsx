import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function FilterPlanetsByNumericValues() {
  const {
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="column-select">
          <select
            data-testid="column-filter"
            name="column"
            id="column-select"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison-select">
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison-select"
            value={ comparison }
            onChange={ (e) => setComparison(e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-input">
          <input
            data-testid="value-filter"
            type="number"
            name="value"
            id="value-input"
            value={ value }
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FilterPlanetsByNumericValues;
