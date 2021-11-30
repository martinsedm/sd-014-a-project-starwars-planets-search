import React, { useState, useContext } from 'react';
import StarwarsContext from '../Provider/StarwarsContext';

function FilterNumber() {
  const { filters, setFilters, planets,
    setFilteredPlanets } = useContext(StarwarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  const filterPlanetsByNumber = () => {
    let planetsByNumber;
    if (comparison === 'maior que') {
      planetsByNumber = planets
        .filter((planet) => Number(planet[column]) > Number(valor));
    }
    if (comparison === 'menor que') {
      planetsByNumber = planets
        .filter((planet) => Number(planet[column]) < Number(valor));
    }
    if (comparison === 'igual a') {
      planetsByNumber = planets
        .filter((planet) => Number(planet[column]) === Number(valor));
    }
    setFilteredPlanets(planetsByNumber);
  };

  const handleClick = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          column,
          value: valor,
          comparison,
        },
      ],
    });
    filterPlanetsByNumber();
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ ({ target: { value } }) => setColumn(value) }
        value={ column }
      >
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
        { option.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        )) }

      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target: { value } }) => setComparison(value) }
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valor }
        onChange={ ({ target: { value } }) => setValor(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </section>
  );
}
export default FilterNumber;
