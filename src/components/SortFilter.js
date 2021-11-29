import React, { useContext, useState } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function SortFilter() {
  const { planets, setFilters, filters } = useContext(starWarsContext);
  const { column, sort } = filters.order;
  const [currentColumn, setCurrentColumn] = useState(column);
  const [currentSort, setCurrentSort] = useState(sort);
  if (!planets.length) {
    return <p> ...LOADING </p>;
  }
  const titles = Object.keys(planets[0]).filter((info) => info !== 'residents');

  function handleClick() {
    setFilters({
      ...filters,
      order: {
        column: currentColumn,
        sort: currentSort,
      },
    });
  }

  return (
    <span>
      <select
        data-testid="column-sort"
        value={ currentColumn }
        onChange={ (e) => setCurrentColumn(e.target.value) }
      >
        {titles.map((title) => (
          <option value={ title } key={ title }>{ title }</option>
        ))}
      </select>
      <label htmlFor="ascendente">
        Ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          id="ascendente"
          name="sort"
          value="ASC"
          onChange={ () => setCurrentSort('ASC') }
          checked={ currentSort === 'ASC' }
        />
      </label>
      <label htmlFor="descendente">
        Descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort"
          id="descendente"
          value="DESC"
          onChange={ () => setCurrentSort('DESC') }
          checked={ currentSort === 'DESC' }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }

      >
        Ordenar
      </button>
    </span>
  );
}

export default SortFilter;
