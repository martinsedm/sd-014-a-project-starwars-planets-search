import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const DEFAULT_COLUMNS_FILTER = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const DEFAULT_COLUMNS_FILTER_SORT = [
  'name', 'Climate', 'Terrain', ...DEFAULT_COLUMNS_FILTER,
];

function Filters() {
  const {
    setFilterByName,
    setFilterByNumericValues,
    setOrder,
    filters,
  } = useContext(PlanetsContext);

  const {
    filters: {
      filterByName,
      filterByNumericValues,
      order,
    } } = filters;

  const filterOptions = (curFilter) => !filterByNumericValues.some(
    (cur) => curFilter === cur.column,
  );

  // const [columnsFilter, setColumnsFilter] = useState('');
  const [columnsFilter, setColumnsFilter] = useState(
    DEFAULT_COLUMNS_FILTER.filter(filterOptions)[0],
  );
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');
  const [orderColumn, setOrderColumn] = useState(order.column);
  const [orderSort, setOrderSort] = useState(order.sort);

  const submitNumericFilter = (e) => {
    e.preventDefault();
    setFilterByNumericValues(columnsFilter, comparisonFilter, valueFilter);
    setColumnsFilter('');
    setComparisonFilter('');
    setValueFilter('');
  };

  const submitOrder = (e) => {
    e.preventDefault();
    setOrder(orderColumn, orderSort);
  };

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
            {/* <option value="" disabled>Select a column</option> */}
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
      <form onSubmit={ submitOrder }>
        <label htmlFor="order">
          Order By
          <select
            id="order"
            data-testid="column-sort"
            value={ orderColumn }
            onChange={ ({ target: { value } }) => setOrderColumn(value) }
          >
            <option value="" disabled>Select a column</option>
            {
              DEFAULT_COLUMNS_FILTER_SORT.map((column) => (
                <option key={ column } value={ column }>{ column }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            data-testid="column-sort-input-asc"
            onChange={ () => setOrderSort('ASC') }
            checked={ orderSort === 'ASC' }
          />
          ASC
        </label>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            data-testid="column-sort-input-desc"
            onChange={ () => setOrderSort('DESC') }
            checked={ orderSort === 'DESC' }
          />
          DESC
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Order
        </button>
      </form>
    </div>
  );
}

export default Filters;
