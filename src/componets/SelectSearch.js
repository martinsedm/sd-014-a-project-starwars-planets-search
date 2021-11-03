import React, { useState } from 'react';

function SelectSearch() {
  const [column, setColumn] = useState('');
  const [comparsion, setComparsion] = useState('');
  const [value, setValue] = useState('');
  return (
    <form action="SelectSearch">
      <select
        data-testid="column-filter"
        onChange={ (event) => (setColumn(event.target.value)) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option selected value="diameter">diameter</option>
        <option value="mangarotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => (setComparsion(event.target.value)) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="numberImput">
        <input
          type="number"
          name="numberImput"
          id="numberImput"
          data-testid="value-filter"
          onChange={ (event) => (setValue(event.target.value)) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default SelectSearch;
