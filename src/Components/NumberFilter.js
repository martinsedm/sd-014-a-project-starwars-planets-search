import React, { useContext, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function NumberFilter() {
  const [stateNumberFilter, setStateNumberFilter] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);
  const { data, setFiltrado, filtrado, setFilter, filter } = useContext(PlanetsContext);

  const handleChange = ({ target: { name, value } }) => {
    setStateNumberFilter([{
      ...stateNumberFilter[0],
      [name]: value,
    }]);
  };

  // Filtro do select
  const FilterNumeric = () => {
    const { column, comparison, value } = stateNumberFilter[0];
    const filtradoSelect = data.filter((planets) => {
      switch (comparison) {
      case 'maior que':
        return (Number(planets[column]) > Number(value));
      case 'menor que':
        return (Number(planets[column]) < Number(value));
      case 'igual a':
        return (Number(planets[column]) === Number(value));
      default:
        return [];
      }
    });
    setFiltrado(...filtrado, [filtradoSelect]);
    console.log(filtrado);
  };

  const handleClick = () => {
    FilterNumeric();
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValues: [{
          ...stateNumberFilter,
        }],
      },
    });
    console.log(filter);
    // setFiltrado([...filtrado, filtradoSelect]);
    // console.log(filtrado);
    // console.log(column);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        id="column"
        onChange={ handleChange }
      >
        <option selected value="population">population</option>
        <option value="orbital_period">orbital period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation period</option>
        <option value="surface_water">surface water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option selected value="maior que">maior que</option>
        <option vau="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value" data-testid="value-filter" onChange={ handleChange }>
        <input type="number" id="value" name="value" />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumberFilter;
