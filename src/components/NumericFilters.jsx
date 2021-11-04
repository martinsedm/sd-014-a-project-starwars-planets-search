import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [filterOptions, setFilterOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const removeFilterOptions = (selectedColumn) => {
    const newOptions = [...filterOptions];
    newOptions.splice(newOptions.indexOf(selectedColumn), 1);
    setFilterOptions(newOptions);
  };
  // Source1: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
  // Source 2: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'

  return (
    <div>
      <label htmlFor="columnFilter">
        <select
          name="columnFilter"
          id="columnFilter"
          data-testid="column-filter"
          onChange={ (event) => setFilterByNumericValues({
            ...filterByNumericValues,
            column: event.target.value,
          }) }
        >
          { filterOptions
            .map((item) => <option value={ item } key={ item }>{ item }</option>) }
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select
          name="comparisonFilter"
          id="comparisonFilter"
          data-testid="comparison-filter"
          onChange={ (event) => setFilterByNumericValues({
            ...filterByNumericValues,
            comparison: event.target.value,
          }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          onChange={ (event) => setFilterByNumericValues({
            ...filterByNumericValues,
            value: event.target.value,
          }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilters({
            ...filters,
            filterByNumericValues: [filterByNumericValues],
          });
          removeFilterOptions(filterByNumericValues.column);
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilters;
