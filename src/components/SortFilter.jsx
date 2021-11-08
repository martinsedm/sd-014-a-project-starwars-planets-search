import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SortFilter() {
  const [checked, setChecked] = useState(false);
  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('ASC');
  const { columns, filters, setFilters } = useContext(PlanetsContext);

  const handlechange = (e) => {
    setChecked(!checked);
    setSort(e.target.value);
  };

  const handleclick = () => {
    setFilters({ ...filters,
      order: {
        ...filters.order,
        column,
        sort,
      } });
  };
  return (
    <form>
      <select
        data-testid="column-sort"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columns.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="ASC"
          checked={ !checked }
          onChange={ (e) => handlechange(e) }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          id="DESC"
          checked={ checked }
          onChange={ (e) => handlechange(e) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleclick() }
      >
        Ordenar

      </button>
    </form>
  );
}

export default SortFilter;
