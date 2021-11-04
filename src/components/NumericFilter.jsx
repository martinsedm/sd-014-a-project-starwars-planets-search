import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const { setFilters, filters, filtersByNumeric } = useContext(PlanetsContext);

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
      filterByNumericValues: filter });
  };
  return (
    <div>
      <select
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label data-testid="value-filter" htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
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
