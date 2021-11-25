import React, { useContext } from 'react';
import ContextPlanet from '../context/ContextPlanet';

function ColumnFilter() {
  const { column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filters,
    setFilters,
    data,
    setData,
  } = useContext(ContextPlanet);

  const handleSearch = (e) => {
    if (e.target.name === 'column') {
      setColumn(e.target.value);
    } if (e.target.name === 'comparison') {
      setComparison(e.target.value);
    } if (e.target.name === 'value') {
      setValue(e.target.value);
    }
  };

  const handleClick = () => {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value },
      ] });

    const filtro = data.filter((planeta) => {
      switch (comparison) {
      case 'maior que':
        return parseFloat(planeta[column]) > parseFloat(value);
      case 'menor que':
        return parseFloat(planeta[column]) < parseFloat(value);
      default:
        return planeta[column] === value;
      }
    });

    setData(filtro);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleSearch }
        name="column"
        id="population"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleSearch }
        name="comparison"
        id="comparison"

      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleSearch }
        data-testid="value-filter"
        type="Number"
        name="value"
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default ColumnFilter;
