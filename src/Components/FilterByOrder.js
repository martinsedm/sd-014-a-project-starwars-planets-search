import React, { useContext, useState } from 'react';
import { PlanetState } from '../Context/PlanetProvider';

import { columnOptions } from '../helper';

const FilterByOrder = () => {
  const [sortInput, setSortInput] = useState({
    column: 'population',
    sort: '',
  });

  const handleInput = ({ target: { name, value } }) => {
    setSortInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    methods: { applySortFilter },
  } = useContext(PlanetState);

  return (
    <>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-sort"
          onChange={ (e) => handleInput(e) }
        >
          { columnOptions.map((option, i) => (
            <option value={ option } key={ i }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        ASC
        <input
          type="radio"
          name="sort"
          value="asc"
          data-testid="column-sort-input-asc"
          onClick={ (e) => handleInput(e) }
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          type="radio"
          name="sort"
          value="desc"
          data-testid="column-sort-input-desc"
          onClick={ (e) => handleInput(e) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => applySortFilter(sortInput) }
      >
        Sort
      </button>
    </>
  );
};

export default FilterByOrder;
