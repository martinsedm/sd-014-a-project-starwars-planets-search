import React, { useState, useContext, useEffect } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import useArray from '../hooks/useArray';
import FilterMessage from './FilterMessage';
import SelectInput from './SelectInput';

import { comparisonOptions, orderOptions, numericOptions } from '../data';

export default function FiltersBar() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'menor que',
    value: '',
  });

  const [orderFilter, setOrderFilter] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const [numericColumns, setNumericColumns] = useArray(numericOptions);

  const { setFilter, filter: { numeric } } = useContext(planetSearchContext);

  useEffect(() => {
    setNumericFilters((prev) => ({ ...prev, column: numericColumns[0] }));
  }, [numericColumns]);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSort = ({ target: { name, value } }) => {
    setOrderFilter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickSort = () => {
    setFilter.byOrder(orderFilter);
  };

  const handleClick = async () => {
    setNumericColumns.remove(numericFilters.column);
    setFilter.byNumeric(numericFilters);
  };

  const removeFilter = (column) => {
    setNumericColumns.add(column);
    setFilter.removeNumericFilter(column);
  };

  return (
    <div>
      <div className="filtersBar">
        <SelectInput
          name="column"
          testId="column-filter"
          onChange={ handleChange }
          options={ numericColumns }
        />
        <SelectInput
          name="comparison"
          testId="comparison-filter"
          onChange={ handleChange }
          options={ comparisonOptions }
        />

        <input
          type="text"
          name="value"
          data-testid="value-filter"
          value={ numericFilters.value }
          onChange={ handleChange }
          className="form-control filter-input"
        />

        <button
          data-testid="button-filter"
          type="button"
          className="btn btn-primary"
          onClick={ handleClick }
        >
          Filtrar

        </button>
        <SelectInput
          name="column"
          testId="column-sort"
          onChange={ handleSort }
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
            onChange={ handleSort }
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
            onChange={ handleSort }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          className="btn btn-primary"
          onClick={ handleClickSort }
        >
          Ordenar

        </button>
      </div>
      {numeric.map((filter, index) => (<FilterMessage
        key={ index }
        filter={ filter }
        onClick={ removeFilter }
      />))}

    </div>

  );
}
