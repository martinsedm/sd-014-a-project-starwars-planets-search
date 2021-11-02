import React, { useState, useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import SelectInput from './SelectInput';
import { orderOptions } from '../data';

export default function SortFilter() {
  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const { setFilter } = useContext(planetSearchContext);

  const handleChange = ({ target: { name, value } }) => {
    setOrderFilter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    setFilter.byOrder(orderFilter);
  };

  return (
    <>
      <SelectInput
        name="column"
        testId="column-sort"
        onChange={ handleChange }
        options={ orderOptions }
      />

      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          name="sort"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          className="form-check-input ms-1"
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          name="sort"
          id="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          className="form-check-input ms-1"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        className="btn btn-primary"
        onClick={ handleClick }
      >
        Ordenar

      </button>
    </>
  );
}
