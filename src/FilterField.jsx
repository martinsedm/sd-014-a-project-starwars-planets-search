import React, { useContext, useState } from 'react';
import PlanetsContext from './context/PlanetsContext';

// column, comparison, value
function FilterField() {
  const { getNameFilter, getValueFilter } = useContext(PlanetsContext);
  const [numFilter, setNumFilter] = useState({});

  const handleChange = ({ target }) => {
    setNumFilter({
      ...numFilter,
      [target.name]: target.value,
    });
  };

  const submitFilter = () => {
    const { column, comparison, value } = numFilter;
    // const parseValue = parseInt(value, 10);
    if (column && comparison && value) {
      // console.log(`column: ${column} | comparison: ${comparison} | value: ${value}`);
      getValueFilter(column, comparison, value);
    }
  };

  return (
    <>
      <div>
        <input
          onChange={ getNameFilter }
          data-testid="name-filter"
          placeholder="Which planet do you seek?"
          type="text"
        />
      </div>

      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleChange }
        >
          <option selected disabled>Filter by</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="rotation_period">rotation_period</option>
          <option value="diameter">diameter</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option selected disabled>Comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ submitFilter }
          data-testid="button-filter"
        >
          Filter
        </button>
      </div>
    </>
  );
}

export default FilterField;
