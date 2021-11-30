import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetNumberSearch() {
  const {
    setFilterByNumeric,
    filterByNumericValue,
    setSelectColumn } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setValue] = useState('');
  const [selectOptions, setOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  function handleFilter({ target }) {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
  }
  const filterPlanets = () => {
    setFilterByNumeric([
      ...filterByNumericValue,
      {
        comparison, column, numberValue }]);

    setSelectColumn(column);
    setOptions(selectOptions.filter((option) => option !== column));
  };
  const removeFilter = ({ target }) => {
    const removed = filterByNumericValue.filter((item) => item.column !== target.name);
    setFilterByNumeric(removed);
  };
  return (
    <div>
      <select
        value={ column }
        id="setColumn"
        onChange={ handleFilter }
        data-testid="column-filter"
      >
        { selectOptions.map((options) => (
          <option
            key={ options }
            value={ options }
          >
            {options}
          </option>))}
      </select>
      <select
        value={ comparison }
        id="setComparison"
        onChange={ handleFilter }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        value={ numberValue }
        onChange={ handleFilter }
        id="setValue"
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ filterPlanets }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
      {
        filterByNumericValue.map((filter) => (
          <div
            data-testid="filter"
            key={ filter.column }
          >

            {`${filter.comparison}, ${filter.column}, ${filter.numberValue}`}
            <button
              onClick={ removeFilter }
              name={ filter.column }
              type="button"
            >
              {' '}
              X
              {' '}

            </button>
          </div>))
      }
    </div>);
}

export default PlanetNumberSearch;
