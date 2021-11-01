import React, { useContext, useState } from 'react';
import StarContext from '../context/context';

function Filter() {
  const { setNumerics } = useContext(StarContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  return (
    <form>
      <fieldset>
        <label htmlFor="column-filter">
          <select
            name="column"
            id="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
            data-testid="column-filter"
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            name="comparison"
            id="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
            data-testid="comparison-filter"
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            name="value"
            id="value-filter"
            placeholder="Valor á Filtrar"
            onChange={ ({ target }) => setValue(target.value) }
            data-testid="value-filter"
            type="number"
          />
        </label>
        <button
          onClick={ () => setNumerics(column, comparison, value) }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </fieldset>
    </form>
  );
}

export default Filter;
