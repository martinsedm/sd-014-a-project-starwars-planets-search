import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function FilterPlanetsByNumericValues() {
  const {
    filters,
    columnOptions,
    handleClickNumericFilter,
    removeNumericFilter,
  } = useContext(PlanetsContext);

  const [columnSelect, setColumnSelect] = useState('population');
  const [comparisonSelect, setComparisonSelect] = useState('maior que');
  const [valueInput, setValueInput] = useState(0);

  const { filterByNumericValues } = filters;

  return (
    <div>
      <form>
        <label htmlFor="column-select">
          <select
            data-testid="column-filter"
            name="columnSelect"
            id="column-select"
            value={ columnSelect }
            onChange={ ({ target }) => setColumnSelect(target.value) }
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
            name="comparisonSelect"
            id="comparison-select"
            value={ comparisonSelect }
            onChange={ ({ target }) => setComparisonSelect(target.value) }
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
            name="valueInput"
            id="value-input"
            value={ valueInput }
            onChange={ ({ target }) => setValueInput(target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClickNumericFilter({
            column: columnSelect,
            comparison: comparisonSelect,
            value: valueInput,
          }) }
        >
          Filtrar
        </button>
      </form>
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <div data-testid="filter" key={ column }>
            <p>{`${column} ${comparison} ${value}`}</p>
            <button type="button" onClick={ () => removeNumericFilter(column) }>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPlanetsByNumericValues;
