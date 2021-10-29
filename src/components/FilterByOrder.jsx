import React, { useState } from 'react';
import { useData, useFilterByOrder } from '../context/DataContext';

export default function FilterByOrder() {
  const { apiDataRaw } = useData();
  const options = Object.keys(apiDataRaw[0]);

  const [column, setColumn] = useState(options[0]);
  const [ord, setOrd] = useState('ASC');
  const { setOrder } = useFilterByOrder();

  function handleClick() {
    const newFilter = {
      column,
      sort: ord,
    };
    setOrder(newFilter);
  }

  return (
    <div className="filter-by-order">
      <select
        name=""
        id=""
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-sort"
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          defaultChecked="true"
          data-testid="column-sort-input-asc"
          type="radio"
          id="ASC"
          name="ord"
          value="ASC"
          onClick={ ({ target }) => setOrd(target.value) }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="DESC"
          name="ord"
          value="DESC"
          onClick={ ({ target }) => setOrd(target.value) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>

  );
}
