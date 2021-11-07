import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumber() {
  const { filter,
    setFilter,
    planets,
    setPlanets, value,
    setValue,
    column,
    setColumn,
    comparisom: comparison,
    setComparisom: setComparison,
  } = useContext(StarWarsContext);

  const numericFilter = () => {
    let filteredByNumeric;

    if (comparison === 'maior que') {
      filteredByNumeric = planets
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      filteredByNumeric = planets
        .filter((planet) => Number(planet[column]) < Number(value));
    } else if (comparison === 'igual a') {
      filteredByNumeric = planets
        .filter((planet) => Number(planet[column]) === Number((value)));
    }
    setPlanets(filteredByNumeric);
  };

  const handleOnClick = () => {
    setFilter({
      ...filter,
      filterByNumericValue: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    numericFilter();
  };

  return (
    <div>
      <form>
        <select
          name="column"
          id="column"
          value={ column }
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          id="comparison"
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            value={ value }
            id="value"
            onChange={ (e) => setValue(e.target.value) }
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleOnClick }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FilterByNumber;
