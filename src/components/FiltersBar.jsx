import React, { useState, useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import FilterMessage from './FilterMessage';

const WORD_SLICE = 3;

export default function FiltersBar() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'menor que',
    value: '',
  });

  const [showOptions, setShowOptions] = useState({
    pop: true,
    orb: true,
    dia: true,
    rot: true,
    sur: true,
  });

  const { setFilter, filter: { numeric } } = useContext(planetSearchContext);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    setShowOptions((prevState) => ({
      ...prevState,
      [numericFilters.column.slice(0, WORD_SLICE)]: false,
    }));
    setFilter.byNumeric(numericFilters);
  };

  const removeFilter = (column) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [column.slice(0, WORD_SLICE)]: true,
    }));
    setFilter.removeNumericFilter(column);
  };

  return (
    <div>
      <div className="filtersBar">
        <select
          name="column"
          className="form-select"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {showOptions.pop && <option value="population">population</option>}
          {showOptions.orb && <option value="orbital_period">orbital_period</option>}
          {showOptions.dia && <option value="diameter">diameter</option>}
          {showOptions.rot && <option value="rotation_period">rotation_period</option>}
          {showOptions.sur && <option value="surface_water">surface_water</option>}

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
          onClick={ handleClick }
        >
          Filtrar

        </button>
      </div>
      {numeric.map((filter, index) => (<FilterMessage
        key={ index }
        filter={ filter }
        onClick={ removeFilter }
      />))}

    </div>

  );
}
