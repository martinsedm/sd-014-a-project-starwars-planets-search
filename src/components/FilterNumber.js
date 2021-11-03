import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterNumber() {
  const { data, setData, filter, setFilter } = useContext(Context);
  const { filterByNumericValues: filterValues } = filter;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          ...filterValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handleClick = async () => {
    const { results } = data;
    const { value, column, comparison } = filterValues[0];

    const filterValue = results.filter((planets) => {
      switch (comparison) {
      case 'maior que':
        return Number(planets[column]) > Number(value);
      case 'menor que':
        return Number(planets[column]) < Number(value);
      default:
        return planets[column] === value;
      }
    });

    setData({
      ...data,
      results: filterValue,
    });
  };

  return (
    <section>
      <select
        name="column"
        id="column"
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
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value">
        <input
          type="number"
          name="value"
          id="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
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
