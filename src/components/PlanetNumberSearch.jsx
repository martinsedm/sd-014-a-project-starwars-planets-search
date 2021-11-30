import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetNumberSearch() {
  const { planetsData, setFilterByNumber } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setValue] = useState('');
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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>

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
