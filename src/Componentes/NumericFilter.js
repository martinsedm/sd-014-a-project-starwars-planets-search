import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilter() {
  const { selectedFilters, filters,
    setFilter, options, setOptions } = useContext(PlanetsContext);
  // const { filterByNumericValues } = filters;
  const { column } = filters.filterByNumericValues[0];
  const handleChange = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        column: value,
      }],
    });
  };

  const filterOptions = () => {
    const filterOption = options.filter((option) => option !== column);
    // filterOption.map((filt, index) => (<select key={ index }><options>{filt}</options></select>));
    setOptions(filterOption);
    console.log(filterOption);
  };

  const handleChangeComparison = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        comparison: value,
      }],
    });
  };

  const handleChangeValue = (event) => {
    const { value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        value,
      }],
    });
  };
  const handleClick = () => {
    selectedFilters();
    filterOptions();
  };
  console.log(options);
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChange }
      >
        { options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>)) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="number">
        <input
          name="number"
          type="Number"
          onChange={ handleChangeValue }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
