import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const {
    setFilters,
    filters,
    filtersByNumeric,
    columns } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleClick = () => {
    const filter = {
      column,
      comparison,
      value,
    };

    filtersByNumeric(column, comparison, value);
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filter] });
  };
  return (
    <div>
      <select
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        {columns.map((columnValue) => (
          <option key={ columnValue } value={ columnValue }>{columnValue}</option>
        ))}
      </select>
      <select
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar

      </button>

    </div>
  );
}

export default NumericFilter;
