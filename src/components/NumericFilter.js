import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../provider/GlobalContext';

function NumericFilter() {
  const { filters, filterData, setFilters } = useContext(GlobalContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setValue] = useState('value');

  useEffect(() => {
    filterData();
  }, [filters]);

  const handleButton = () => {
    setFilters({ ...filters, filterByNumericValues: { column, comparison, value } });
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleButton }>
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilter;
