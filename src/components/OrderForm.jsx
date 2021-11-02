import React, { useState, useContext } from 'react';

import planetsContext from '../context/planetsContext';

const OrderForm = () => {
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');

  const { data, isLoading, changeOrder } = useContext(planetsContext);

  if (isLoading) return null;

  return (
    <section>
      <form>
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {
            Object.keys(data[0]).map((option) => {
              if (option !== 'residents') {
                return <option key={ option } value={ option }>{ option }</option>;
              }
              return null;
            })
          }
        </select>
        <label htmlFor="ASC">
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            value="ASC"
            id="ASC"
            name="sort"
            onClick={ ({ target }) => setSort(target.value) }
            defaultChecked
          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            value="DESC"
            id="DESC"
            name="sort"
            onClick={ ({ target }) => setSort(target.value) }
          />
          Descendente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => changeOrder({ column, sort }) }
        >
          Ordenar
        </button>
      </form>
    </section>
  );
};

export default OrderForm;
