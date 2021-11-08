import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function NumericalFilter() {
  const {
    filters,
    column,
    comparison,
    value,
    columnOptions,
    setFilter,
    setColumn,
    setComparison,
    setValue,
    setColumnOptions,
  } = useContext(PlanetsContext);

  const handleClick = () => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
    const filterColumnOptions = columnOptions
      .filter((columnItems) => columnItems !== column);
    setColumnOptions(filterColumnOptions);
  };

  return (
    <form>
      <fieldset>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            { columnOptions
              .map((columnItems) => <option key={ columnItems }>{ columnItems }</option>)}
          </select>
        </label>

        <label htmlFor="comparison">
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <label htmlFor="value">
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>

        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

export default NumericalFilter;
