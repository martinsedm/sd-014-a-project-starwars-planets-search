import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function NumericFilter() {
  const { setFilters, filters } = useContext(PlanetsContext);

  function handleChange() {
    const columnId = document.querySelector('#column');
    const comparisonId = document.querySelector('#comparison');
    const valueId = document.querySelector('#value');
    const column = columnId.value;
    const comparison = comparisonId.value;
    const { value } = valueId;
    const teste = { ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    };
    setFilters(teste);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        id="column"
        onChange={ () => handleChange() }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}
