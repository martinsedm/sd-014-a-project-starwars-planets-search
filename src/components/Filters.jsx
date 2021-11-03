import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { columnOptions, comparisonOptions } from '../data/data';

export default function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value }],
    });
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { columnOptions.map((option) => (
          <option key={ option } value={ option }>{ option }</option>
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
