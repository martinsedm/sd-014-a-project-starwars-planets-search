import React, { useContext } from 'react';
import ContextStar from '../context/ContextStar';

export default function Sort() {
  const {
    toSort,
    setOrderColumn,
    orderOptions,
    setOrderType,
  } = useContext(ContextStar);

  return (
    <>
      <h3>Ordenar:</h3>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setOrderColumn(target.value) }
      >
        {orderOptions.map((o) => <option key={ o } value={ o }>{o}</option>)}
      </select>
      <label htmlFor="ascendent-label">
        <input
          type="radio"
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setOrderType(target.value) }
        />
        ASC
      </label>
      <label htmlFor="descendent-label">
        <input
          type="radio"
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setOrderType(target.value) }
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ toSort }
      >
        Ordernar
      </button>
    </>
  );
}
