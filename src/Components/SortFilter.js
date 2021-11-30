import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function SortFilter() {
  const { setFilterSort,
    setFiltered, filtered } = useContext(PlanetsContext);
  const [sort, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');
  const [columns] = useState(['name', 'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const filterByName = (sorter, coluna) => {
    if (sorter === 'ASC') {
      (filtered.sort((a, b) => {
        const nomagic = -1;
        if (a[coluna] > b[coluna]) return 1;
        if (a[coluna] < b[coluna]) return nomagic;
        return 0;
      }));
    } else {
      (filtered.sort((a, b) => {
        const nomagic = -1;
        if (a[coluna] < b[coluna]) return 1;
        if (a[coluna] > b[coluna]) return nomagic;
        return 0;
      }));
    }
    setFiltered(filtered);
  };

  const filterByNumber = (sorter, coluna) => {
    if (sorter === 'ASC') {
      (filtered.sort((a, b) => {
        const nomagic = -1;
        if (+a[coluna] > +b[coluna]) return 1;
        if (+a[coluna] < +b[coluna]) return nomagic;
        return 0;
      }));
    } else {
      (filtered.sort((a, b) => {
        const nomagic = -1;
        if (+a[column] < +b[column]) return 1;
        if (+a[column] > +b[column]) return nomagic;
        return 0;
      }));
    }
    setFiltered(filtered);
  };

  const setFilter = () => {
    if (column === 'orbital_period') {
      filterByNumber(sort, column);
      setFilterSort({ column, sort });
    } else {
      filterByName(sort, column);
      setFilterSort({ column, sort });
    }
  };

  useEffect(setFilter, []);
  useEffect(setFilter, [filtered]);

  return (
    <>
      <br />

      <label htmlFor="columns">
        <select
          name="columns"
          id="column"
          data-testid="column-sort"
          onChange={ ({ target }) => {
            setColumn(target.value);
          } }
        >
          {columns.map((coluna, index) => (
            <option
              key={ index }
              value={ coluna }
            >
              {coluna}
            </option>
          ))}
        </select>
      </label>
      <br />
      <div>
        <label htmlFor="sortWay">
          ascendente
          <input
            type="radio"
            name="sortWay"
            id="sortAsc"
            value="ASC"
            onClick={ ({ target }) => {
              setSort(target.value);
            } }
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="sortWay">
          descendente
          <input
            type="radio"
            name="sortWay"
            id="sortDesc"
            value="DESC"
            onClick={ ({ target }) => {
              setSort(target.value);
            } }
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
      <br />
      <button type="button" onClick={ setFilter } data-testid="column-sort-button">
        Ordenar
      </button>
    </>
  );
}

export default SortFilter;
