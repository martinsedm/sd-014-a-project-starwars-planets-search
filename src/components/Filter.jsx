import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Filter() {
  const appContext = useContext(AppContext);
  const comparisonValues = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <input
        value={ appContext.searchInput }
        data-testid="name-filter"
        onChange={ ({ target }) => appContext.setSearchInput(target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => appContext.setColumnOption(target.value) }
      >
        { appContext.columnOptions.map((option, index) => (
          <option key={ index }>
            { option }
          </option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => appContext.setComparisonOption(target.value) }
      >
        { comparisonValues.map((comparison, index) => (
          <option key={ index }>
            {comparison}
          </option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ appContext.valueInput }
        onChange={ ({ target }) => appContext.setValueInput(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ appContext.numericFilter }
      >
        Adicionar Filtro
      </button>
    </div>

  );
}
