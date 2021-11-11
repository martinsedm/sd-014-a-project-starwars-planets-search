import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function SearchByNumericValues() {
  const { setColumn,
    setComparison,
    setValue, setFilters,
    column,
    value,
    comparison,
    filters } = useContext(StarwarsContext);

  const handleChange = (e) => {
    if (e.target.name === 'column') {
      setColumn(e.target.value);
    } if (e.target.name === 'comparison') {
      setComparison(e.target.value);
    } if (e.target.name === 'value') {
      setValue(e.target.value);
    }
  };

  const HandleClick = () => {
    setFilters({ ...filters, filterByNumericValues: [{ column, comparison, value }] });
  };

  return (
    <div>
      <select
        onChange={ handleChange }
        name="column"
        id="population"
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ handleChange }
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        data-testid="value-filter"
        type="Number"
        name="value"
      />
      <button
        onClick={ HandleClick }
        data-testid="button-filter"
        type="button"
      >
        FILTRAR
      </button>
    </div>
  );
}

export default SearchByNumericValues;
