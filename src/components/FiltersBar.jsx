import React, { useState, useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';

export default function FiltersBar() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'menor que',
    value: '',
  });

  const { setFilter } = useContext(planetSearchContext);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="filtersBar">
      <select
        name="column"
        className="form-select"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        className="form-select"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
        <option value="maior que">maior que</option>
      </select>

      <input
        type="text"
        name="value"
        data-testid="value-filter"
        value={ numericFilters.value }
        onChange={ handleChange }
      />

      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-primary"
        onClick={ () => setFilter.byNumeric(numericFilters) }
      >
        Filtrar

      </button>
    </div>
  );
}
