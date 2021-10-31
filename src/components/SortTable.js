import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

import { ALL_CATEGORIES as categories } from '../info';

function SortTable() {
  const [column, setColumn] = useState('Name');
  const { filters, setFilters, sortMethod, setSortMethod } = useContext(SWContext);

  const onButtonClick = () => {
    setFilters({
      ...filters,
      order: {
        sort: sortMethod,
        column,

      },
    });
  };

  return (
    <section>
      <h3>Ordenar</h3>
      <label htmlFor="categories">
        <select
          name="categories"
          data-testid="column-sort"
          onChange={ (e) => setColumn(e.target.value.toLowerCase()) }
        >
          { categories.map((cat) => (
            <option
              key={ `${cat}_sort` }
              value={ cat.replace(' ', '_').toLowerCase() }
            >
              { cat }
            </option>
          )) }
        </select>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sortMethod"
          value="ASC"
          checked={ sortMethod === 'ASC' }
          onChange={ (e) => setSortMethod(e.target.value) }
        />
        Ascendente
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sortMethod"
          value="DESC"
          checked={ sortMethod === 'DESC' }
          onChange={ (e) => setSortMethod(e.target.value) }
        />
        Descendente
      </label>
      <button type="button" data-testid="column-sort-button" onClick={ onButtonClick }>
        Ordenar
      </button>
    </section>
  );
}

export default SortTable;
