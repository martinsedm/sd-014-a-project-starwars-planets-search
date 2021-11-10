import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumericValues() {
  const {
    data,
    setData,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(StarWarsContext);

  function filterByNumericValues() {
    switch (comparison) {
    case 'maior que':
      setData(data.filter((planet) => Number(planet[column]) > Number((value))));
      break;
    case 'menor que':
      setData(data.filter((planet) => Number(planet[column]) < Number((value))));
      break;
    case 'igual a':
      setData(data.filter((planet) => Number(planet[column]) === Number((value))));
      break;

    default:
      break;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });

    filterByNumericValues();
  }

  return (
    <div>
      <form>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          value={ column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FilterByNumericValues;
