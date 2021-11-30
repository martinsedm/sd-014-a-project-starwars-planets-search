import React, { useContext, useEffect, useState } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';

export default function Sort() {
  const { planets, setFilters, filters, filterPlanets,
    setFilterPlanets } = useContext(Context);
  const [columns, setColumns] = useState([]);
  // const [asc, setAsc] = useState(true);
  // const [desc, setDesc] = useState(false);
  const eachOrder = {
    column: 'name',
    sort: 'ASC',
  };
  const [eachSort, setEachSort] = useState(eachOrder);

  useEffect(() => {
    if (planets.length > 0) {
      setColumns(Object.keys(planets[0]));
    }
  }, [planets]);

  function sorting() {
    const { column, sort } = eachSort;
    const filterdSort = filterPlanets.sort((a, b) => {
      if (sort === 'ASC') {
        console.log(a[column]);
        return a[column] - b[column];
      } return b[column] - a[column];
    });
    setFilterPlanets(filterdSort);
  }

  if (!columns) return <span>Loading...</span>;

  function handleClick() {
    setFilters({ ...filters, order: eachSort });
    sorting();
  }

  function handleChange({ target }) {
    setEachSort({ ...eachSort, sort: target.value });
  }

  return (
    <form>
      <select
        value={ eachSort.column }
        name="column"
        onChange={ ({ target }) => setEachSort({ ...eachSort, column: target.value }) }
        data-testid="column-sort"
      >
        {columns.map((col) => (
          <option key={ col }>{ col }</option>
        ))}
      </select>
      <label htmlFor="asc">
        <input
          // checked={ asc }
          id="asc"
          name="sort"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleChange }
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          // checked={ desc }
          id="desc"
          name="sort"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChange }
        />
        DESC
      </label>
      <Button label="Ordenar" onClick={ handleClick } data="column-sort-button" />

    </form>
  );
}
