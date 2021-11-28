import React, { useContext, useState } from 'react';

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

  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const filterOptions = () => {
    const filteredOption = columnOptions.filter((option) => option !== column);
    setColumnOptions(filteredOption);
  };

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
    filterOptions();
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
            { columnOptions.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                { option }
              </option>
            )) }
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
