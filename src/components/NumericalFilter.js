import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function NumericalFilter() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const { handleClick } = useContext(PlanetsContext);

  return (
    <form>
      <fieldset>
        <label htmlFor="column">
          <select
            name="column"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
          onClick={ () => handleClick(column, comparison, value) }
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

export default NumericalFilter;
