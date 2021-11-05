import React, { useContext, useState } from 'react';
import starContext from '../context/starContext';

export default function OrderSelector() {
  const { options, handleclick } = useContext(starContext);
  const [optSelect] = useState(['name', ...options]);
  const [order, setOrder] = useState('name');
  const [orderBy, setOrderBy] = useState('ASC');

  // const filterByASC = () => {
  //   const UM = -1;
  //   const orderData = data.sort((a, b) => {
  //     if (order === 'name') {
  //       if (a[order] > b[order]) { return 1; }
  //       if (a[order] < b[order]) { return UM; }
  //       return 0;
  //     }
  //     return Number(a[order]) - Number(b[order]);
  //   });
  //   setData(orderData);
  // };
  // const filterByDESC = () => {
  //   const UM = -1;
  //   const orderData = data.sort((a, b) => {
  //     if (order === 'name') {
  //       if (b[order] > a[order]) { return 1; }
  //       if (b[order] < a[order]) { return UM; }
  //       return 0;
  //     }
  //     return Number(b[order]) - Number(a[order]);
  //   });
  //   setData(orderData);
  // };

  // const handleclick = () => {
  //   if (orderBy === 'ASC') { filterByASC(); } else { filterByDESC(); }
  // };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setOrder(value) }
      >
        {
          optSelect.map((el) => (
            <option
              key={ el }
              value={ el }
            >
              { el }
            </option>
          ))
        }
      </select>
      <label htmlFor="asc-selector">
        ASC
        <input
          data-testid="column-sort-input-asc"
          name="selector"
          id="asc-selector"
          type="radio"
          value="ASC"
          onClick={ () => setOrderBy('ASC') }
        />
      </label>
      <label htmlFor="desc-selector">
        DESC
        <input
          data-testid="column-sort-input-desc"
          name="selector"
          id="desc-selector"
          type="radio"
          value="DESC"
          onClick={ () => setOrderBy('DESC') }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleclick(order, orderBy) }
      >
        filtrar
      </button>
    </div>
  );
}
