import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';
import { numberFilters } from '../data';

function NumberFilter() {
  const [filters, setNumberFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const {
    setFilterByNumber,
  } = useContext(StarWarsContext);

  const handleChange = (e) => {
    setNumberFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        setFilterByNumber(filters);
      } }
    >
      <select name="column" data-testid="column-filter" onChange={ handleChange }>
        {
          Object.keys(numberFilters)
            .map((key) => (
              <option
                value={ key }
                key={ key }
              >
                { key }
              </option>
            ))
        }
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default NumberFilter;
