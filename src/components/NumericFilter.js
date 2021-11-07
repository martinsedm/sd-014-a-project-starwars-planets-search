import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import filter from '../services/filter';

export default function NumericFilter() {
  const {
    setFilters,
    filters, planetInfo, setFilterClick, filterClick } = useContext(PlanetsContext);

  function handleChange() {
    const columnId = document.querySelector('#column');
    const comparisonId = document.querySelector('#comparison');
    const valueId = document.querySelector('#value');
    const column = columnId.value;
    const comparison = comparisonId.value;
    const { value } = valueId;
    const filtersValues = { ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    };
    setFilters(filtersValues);
  }

  function handleClick() {
    setFilterClick(!filterClick);
    filter(filters, planetInfo, filterClick);
    document.querySelector(`#${filters.filterByNumericValues[0].column}`).remove();
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        id="column"
        onChange={ () => handleChange() }
      >
        <option id="population">population</option>
        <option id="orbital_period">orbital_period</option>
        <option id="diameter">diameter</option>
        <option id="rotation_period">rotation_period</option>
        <option id="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={ () => handleChange() }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        id="value"
        data-testid="value-filter"
        onChange={ () => handleChange() }
      />
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
