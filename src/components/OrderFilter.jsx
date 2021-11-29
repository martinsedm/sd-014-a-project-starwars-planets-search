import React, { useState, useContext } from 'react';
import StarContext from '../context/StarContext';
import SelectFilter from './SelectFilter';

function OrderFilter() {
  const newState = {
    column: 'name',
    sort: '',
  };
  const [orderFilter, setOrderFilter] = useState(newState);
  const { getHeaders, handleRadio } = useContext(StarContext);
  const { column } = orderFilter;

  const handleChange = ({ target }) => {
    setOrderFilter({ ...orderFilter, [target.name]: target.value });
  };

  const headers = getHeaders();
  return (
    <div>
      <SelectFilter
        setup={ [headers, 'column-sort', 'column', column, handleChange] }
      />
      <label htmlFor="asc-radio">
        Ascendente
        <input
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
          id="asc-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="desc-radio">
        Descendente
        <input
          type="radio"
          name="sort"
          value="DESC"
          data-testid="column-sort-input-desc"
          id="desc-radio"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleRadio(orderFilter) }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;
