import React, { useState, useContext, useEffect } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import useArray from '../hooks/useArray';
import FilterMessage from './FilterMessage';
import SelectInput from './SelectInput';
import SortFilter from './SortFilter';

import { comparisonOptions, numericOptions } from '../data';

export default function FiltersBar() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'menor que',
    value: '',
  });

  const [numericColumns, setNumericColumns] = useArray(numericOptions);

  const { setFilter, filter: { numeric } } = useContext(planetSearchContext);

  useEffect(() => {
    setNumericFilters((prev) => ({ ...prev, column: numericColumns[0] }));
  }, [numericColumns]);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevState) => ({ ...prevState, [name]: value }));
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
        <SortFilter />

      </div>
      {numeric.map((filter, index) => (<FilterMessage
        key={ index }
        filter={ filter }
        onClick={ removeFilter }
      />))}

    </div>

  );
}
