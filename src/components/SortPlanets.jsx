import React, { useContext, useState } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function SortPlanets() {
  const { handleClickSortFilter } = useContext(PlanetsContext);
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  return (
    <div>
      <form>
        <label htmlFor="column-select">
          <select
            data-testid="column-sort"
            id="column-select"
            name="column"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="sort-asc">
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            value="ASC"
            checked={ sort === 'ASC' }
            id="sort-asc"
            onChange={ ({ target }) => setSort(target.value) }
          />
          Crescente
        </label>
        <label htmlFor="sort-desc">
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            value="DESC"
            checked={ sort === 'DESC' }
            id="sort-desc"
            onChange={ ({ target }) => setSort(target.value) }
          />
          Decrescente
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => handleClickSortFilter({ column, sort }) }
        >
          Ordenar
        </button>
      </form>
    </div>
  );
}

export default SortPlanets;
