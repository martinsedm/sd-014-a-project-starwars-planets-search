import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { comparisonOptions } from '../data/data';

export default function FiltersForm() {
  const { handleClick, setColumn,
    setComparison, setValue, columnOptions } = useContext(PlanetsContext);

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { columnOptions.map((option) => (
          <option
            key={ option }
            id={ option }
            value={ option }
          >
            { option }
          </option>
        )) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        { comparisonOptions.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
        )) }
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
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
