import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsFilter() {
  const {
    planets,
    setPlanets,
    comparison,
    setComparison,
    value,
    setValue,
    filters,
    setFilters,
    column,
    setColumn } = useContext(PlanetsContext);

  const filterComparison = async () => {
    let planetComparison;

    if (comparison === 'maior que') {
      planetComparison = planets
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      planetComparison = planets
        .filter((planet) => Number(planet[column]) < Number((value)));
    } else {
      planetComparison = planets
        .filter((planet) => Number(planet[column]) === Number((value)));
    }

    await setPlanets(planetComparison);
  };

  const handleClinck = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    filterComparison();
  };
  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ (columns) => setColumn(columns.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ (compare) => setComparison(compare.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ (num) => setValue(num.target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClinck }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default PlanetsFilter;
