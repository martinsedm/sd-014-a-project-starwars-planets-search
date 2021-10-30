import React, { useContext, useState } from 'react';
import { PlanetState } from '../Context/PlanetProvider';

import { columnOptions } from '../helper';

const NumericFilter = () => {
  const [filterInput, setFilterInput] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleFilterInput = ({ target: { name, value } }) => {
    setFilterInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    values: { filter: { filters: { filterByNumericValues } } },
    methods: { applyNumericFilter },
  } = useContext(PlanetState);

  const usedFilters = filterByNumericValues.reduce((acc, filter) => {
    acc.push(filter.column);
    return acc;
  }, []);

  return (
    <>
      <label htmlFor="column-filter">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => handleFilterInput(e) }
        >
          {columnOptions.map((option, i) => {
            if (usedFilters.includes(option)) {
              return null;
            }

            return (
              <option key={ i } value={ option }>{option}</option>
            );
          })}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => handleFilterInput(e) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ (e) => handleFilterInput(e) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => applyNumericFilter(filterInput) }
      >
        Apply Filter
      </button>
    </>
  );
};

export default NumericFilter;
