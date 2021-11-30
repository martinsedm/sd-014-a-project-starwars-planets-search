import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetNumberSearch() {
  const { planetsData, setFilterByNumber } = useContext(PlanetsContext);
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
    let filteredNumberPlanets;
    switch (comparison) {
    case 'maior que':
      filteredNumberPlanets = planetsData
        .filter((planet) => Number(planet[column]) > Number(numberValue));
      break;
    case 'menor que':
      filteredNumberPlanets = planetsData
        .filter((planet) => Number(planet[column]) < Number(numberValue));
      break;
    case 'igual a':
      filteredNumberPlanets = planetsData
        .filter((planet) => Number(planet[column]) === Number(numberValue));
      break;
    default:
      break;
    }
    setOptions(selectOptions.filter((option) => option !== column));
    setFilterByNumber(filteredNumberPlanets);
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

    </div>);
}

export default PlanetNumberSearch;
