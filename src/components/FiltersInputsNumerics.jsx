import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersInputsNumerics() {
  const {
    data,
    setData,
    filters,
    setFilters,
    column,
    comparison,
    value,
    options,
    setColumn,
    setComparison,
    setValue,
    setOptions,
  } = useContext(StarWarsContext);

  const removeFilter = () => {
    const filterRmv = options.filter((option) => option !== column);
    setOptions(filterRmv);
  };

  const changeColumn = (event) => {
    setColumn(event.target.value);
  };

  const changeComparison = (event) => {
    setComparison(event.target.value);
  };

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column,
          comparison,
          value,
        },
      ],
    });

    const filtersNumerics = data.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return parseFloat(planet[column]) > parseFloat(value);
      case 'menor que':
        return parseFloat(planet[column]) < parseFloat(value);
      default:
        return planet[column] === value;
      }
    });

    setData(filtersNumerics);
    removeFilter();
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ changeColumn }
      >
        {
          options.map((option, index) => (
            <option value={ option } key={ index }>
              { option }
            </option>
          ))
        }
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ changeComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ changeValue }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FiltersInputsNumerics;
