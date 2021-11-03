import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function FilterForm() {
  const { changeByNameFilter, changeNumericValues,
    filters: { filterByName } } = useContext(SWContext);

  const [filter, setFilter] = useState({
    filterByNumericValues:
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },

  });

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      filterByNumericValues:
        {
          ...filter.filterByNumericValues,
          [name]: value,
        },

    });
  };

  return (
    <section>
      <input
        type="text"
        onChange={ (ev) => changeByNameFilter(ev) }
        value={ filterByName.name }
        data-testid="name-filter"
        name="name"
        id="name"
      />
      <select
        onChange={ handleChange }
        name="column"
        id="column"
        data-testid="column-filter"
      >
        <option name="column" value="population">population</option>
        <option name="column" value="orbital_period">orbital_period</option>
        <option name="column" value="diameter">diameter</option>
        <option name="column" value="rotation_period">rotation_period</option>
        <option name="column" value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ handleChange }
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
      >
        <option name="comparison" value="maior que">maior que</option>
        <option name="comparison" value="menor que">menor que</option>
        <option name="comparison" value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        type="number"
        data-testid="value-filter"
        name="value"
        id="value"
      />
      <button
        onClick={ () => changeNumericValues(filter) }
        type="button"
        value={ filter.filterByNumericValues.value }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterForm;
