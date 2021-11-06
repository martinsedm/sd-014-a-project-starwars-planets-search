import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { megaFilter } from '../services';

function Form() {
  const {
    filters,
    setFilters,
    planets,
    filteredPlanets,
    setFilteredPlanets,
  } = useContext(PlanetsContext);

  const { filterByName: { name },
    filterByNumericValues: [{
      column,
      comparison,
      value,
    }],
  } = filters;

  const { filterByNumericValues } = filters;

  useEffect(() => {
    function nameFilter() {
      const newPlanets = planets.filter((planet) => planet.name
        .toLowerCase().includes(name.toLowerCase()));
      setFilteredPlanets(newPlanets);
    }
    nameFilter();
  }, [name, setFilteredPlanets, planets]);

  const handleChange = ({ target }) => {
    const newName = {
      ...filters,
      filterByName: {
        name: target.value },
    };
    setFilters(newName);
  };

  const handleSelectors = ({ target }, inName) => {
    const tramoia = filterByNumericValues[0];
    const newCollmun = {
      ...filters,
      filterByNumericValues: [{ ...tramoia, [inName]: target.value }],
    };
    setFilters(newCollmun);
  };

  const handleClick = () => {
    const filterP = [...filteredPlanets];
    const newPlanets = megaFilter(column, comparison, value, filterP);
    setFilteredPlanets(newPlanets);
  };

  const renderOptions = () => {
    const options = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    return (
      options.map((option, index) => (<option key={ index }>{option}</option>))
    );
  };

  return (
    <>
      <label htmlFor="nameFilter">
        Filtrar por nome:
        <input
          data-testid="name-filter"
          id="nameFilter"
          name="filterByName"
          type="text"
          value={ name }
          onChange={ handleChange }
        />
      </label>
      <br />
      <label htmlFor="select-filters">
        Filtrar por:
        <select
          name="selectFilter"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => handleSelectors(e, 'column') }
        >
          {renderOptions()}
        </select>
        <select
          name="comparisonFilter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => handleSelectors(e, 'comparison') }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          name="value"
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (e) => handleSelectors(e, 'value') }
        />
        <button
          name="buttonFilter"
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>

      </label>
    </>
  );
}

export default Form;
