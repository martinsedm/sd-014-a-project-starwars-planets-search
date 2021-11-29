import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function SortFilter() {
  const { planets, setFilters, filters } = useContext(starWarsContext);
  const { column, sort } = filters.order;
  if (!planets.length) {
    return <p> ...LOADING </p>;
  }
  const titles = Object.keys(planets[0]).filter((info) => info !== 'residents');

  function setColumn({ target: { value } }) {
    setFilters({
      ...filters,
      order: {
        column: value,
        sort,
      },
    });
  }

  function setSort({ target: { value } }) {
    setFilters({
      ...filters,
      order: {
        column,
        sort: value,
      },
    });
  }

  return (
    <span>
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ setColumn }
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
          onChange={ setSort }
          checked={ sort === 'ASC' }
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
          onChange={ setSort }
          checked={ sort === 'DESC' }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </span>
  );
}

export default SortFilter;
