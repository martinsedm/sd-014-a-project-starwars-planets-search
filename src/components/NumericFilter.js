import React from 'react';
// import React, { useContext } from 'react';
// import GlobalContext from '../provider/GlobalContext';

function NumericFilter() {
  return (
    <form>
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
        />
      </label>
      <button type="button" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilter;
