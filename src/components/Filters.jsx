import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const DEFAULT_COLUMNS_FILTER = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function Filters() {
  const {
    setFilterByName,
    setFilterByNumericValues,
    filters,
  } = useContext(PlanetsContext);

  const {
    filters: {
      filterByName,
      filterByNumericValues,
    } } = filters;

  const [columnsFilter, setColumnsFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  const submitNumericFilter = (e) => {
    e.preventDefault();
    setFilterByNumericValues(columnsFilter, comparisonFilter, valueFilter);
    setColumnsFilter('');
    setComparisonFilter('');
    setValueFilter('');
  };

  const filterOptions = (curFilter) => !filterByNumericValues.some(
    (cur) => curFilter === cur.column,
  );

  return (
    <div>
      <label htmlFor="by-name">
        Filter By Name
        <input
          data-testid="name-filter"
          type="text"
          value={ filterByName.name }
          id="by-name"
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
      </label>
      <form onSubmit={ submitNumericFilter }>
        <label htmlFor="columns-filter">
          Filter By Column
          <select
            id="columns-filter"
            data-testid="column-filter"
            value={ columnsFilter }
            onChange={ ({ target: { value } }) => setColumnsFilter(value) }
          >
            {
              DEFAULT_COLUMNS_FILTER.filter(filterOptions).map((column) => (
                <option key={ column } value={ column }>{ column }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Comparison
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
            value={ comparisonFilter }
            onChange={ ({ target: { value } }) => setComparisonFilter(value) }
          >
            <option value="" disabled>Select a comparison</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          Value
          <input
            id="value-filter"
            data-testid="value-filter"
            type="number"
            value={ valueFilter }
            onChange={ ({ target: { value } }) => setValueFilter(value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default Filters;
