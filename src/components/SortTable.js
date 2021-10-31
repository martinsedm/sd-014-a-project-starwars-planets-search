import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

import { ALL_CATEGORIES as categories } from '../info';

function SortTable() {
  const [category, setCategory] = useState('Name');
  const [sortMethod, setSortMethod] = useState('ASC');
  const { filters, setFilters } = useContext(SWContext);

  const onButtonClick = () => {
    setFilters({
      ...filters,
      order: {
        column: category,
        sort: sortMethod,
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
          onChange={ (e) => setCategory(e.target.value.toLowerCase()) }
        >
          { categories.map((cat) => (
            <option key={ `${cat}_sort` } value={ cat }>{ cat }</option>
          )) }
        </select>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sortMethod"
          value="ASC"
          onChange={ (e) => setSortMethod(e.target.value) }
        />
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sortMethod"
          value="DESC"
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
