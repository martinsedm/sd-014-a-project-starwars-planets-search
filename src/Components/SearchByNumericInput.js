import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function SearchByNumericInput() {
  const { setFilters, setFilterMethod } = useContext(PlanetContext);

  const [comparisonFilters, setComparisonFilters] = useState({});

  function handleChange({ target: { name, value: content } }) {
    setComparisonFilters({
      ...comparisonFilters,
      [name]: content,
    });
  }

  function handleClick() {
    const { column, comparison, value } = comparisonFilters;
    const allFiltersSelected = column && comparison && value;

    if (allFiltersSelected) {
      setFilters({
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      });
      setFilterMethod('numeric');
    }
  }

  return (
    <fieldset>
      <legend>
        Filtre por valor numérico:
      </legend>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </fieldset>
  );
}

export default SearchByNumericInput;
