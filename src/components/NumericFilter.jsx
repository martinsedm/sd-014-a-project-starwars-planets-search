import React, { useContext, useState } from 'react';
import PlanetContext from '../context/Context';

export default function NumericFilter() {
  const { filterNumeric } = useContext(PlanetContext);

  const firstFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const secondFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [stateFilter, setStateFilter] = useState(firstFilter);

  function handleClick() {
    const filterColumn = document.getElementById('column-filter');
    const filtercomparison = document.getElementById('comparison-filter');
    const filterInput = document.getElementById('value-filter').value;
    const filterOption = filterColumn.options[filterColumn.selectedIndex].value;
    const comparison = filtercomparison.options[filtercomparison.selectedIndex].value;
    filterNumeric(filterInput, filterOption, comparison);
    const noRepeatFilter = firstFilter.filter((option) => option !== filterOption);
    setStateFilter(noRepeatFilter);
  }
  return (
    <form>
      <label htmlFor="column">
        <select data-testid="column-filter" id="column-filter">
          {
            stateFilter.map((column) => <option key={ column }>{ column }</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison">
        <select data-testid="comparison-filter" id="comparison-filter">
          {
            secondFilter.map((value) => <option key={ value }>{ value }</option>)
          }
        </select>
      </label>
      <input type="number" data-testid="value-filter" id="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Aplicar Filtro
      </button>
    </form>
  );
}
