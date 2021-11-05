import React, { useState, useContext } from 'react';
import Context from '../Context/Context';

function FilterByValues() {
  const {
    filterFunction,
    filters: { filterByNumericValues },
    setFilters,
  } = useContext(Context);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columnArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChange = (event) => {
    setFilter({ ...filter, [event.target.id]: event.target.value });
  };

  const handleClick = () => {
    setFilters([
      ...filterByNumericValues,
      filter,
    ]);
    filterFunction(filter);
  };

  return (
    <div>
      <label htmlFor="column">
        { 'Filter column: ' }
        <select
          id="column"
          data-testid="column-filter"
          onChange={ (event) => handleChange(event) }
        >
          {filterByNumericValues
            .reduce((colArray, current) => (
              colArray.filter((col) => col !== current.column)
            ), columnArray)
            .map((col, index) => (
              <option key={ index } value={ col }>{col}</option>
            ))}
        </select>
      </label>

      <label htmlFor="comparison">
        { ' Comparison: ' }
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (event) => handleChange(event) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        { ' Value: ' }
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          placeholder="Enter a number"
          onChange={ (event) => handleChange(event) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByValues;
