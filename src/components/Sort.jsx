import React, { useContext, useEffect, useState } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';

export default function Sort() {
  const { planets, setFilters, filters, filterPlanets } = useContext(Context);
  const [columns, setColumns] = useState([]);
  // const [asc, setAsc] = useState(true);
  // const [desc, setDesc] = useState(false);
  const eachOrder = {
    column: 'name',
    sort: 'ASC',
  };
  const [eachSort, setEachSort] = useState(eachOrder);
  // const [asc, setAsc] = useState(true);

  function sortString(column, sort) {
    filterPlanets.sort((a, b) => {
      if (sort === 'ASC') {
        console.log('string', a[column]);
        // https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
        return (String(a[column])).localeCompare(String(b[column]));
      } return (String(b[column])).localeCompare(String(a[column]));
    });
  }

  function sortNumber(column, sort) {
    filterPlanets.sort((a, b) => {
      if (sort === 'ASC') {
        console.log('number', a[column]);
        return Number(a[column]) - Number(b[column]);
      } return Number(b[column]) - Number(a[column]);
    });
  }

  function sorting() {
    const { column, sort } = eachSort;
    const filterdSort = (() => {
      if (column === 'name') {
        sortString(column, sort);
      } else {
        sortNumber(column, sort);
      }
    });
    filterdSort();
    console.log(filterPlanets);
    // console.log('condition');
    // https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/
    // setFilterPlanets(filterdSort);
  }

  useEffect(() => {
    if (planets.length > 0) {
      setColumns(Object.keys(planets[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planets]);

  useEffect(() => {
    if (planets.length > 0) {
      sorting();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
