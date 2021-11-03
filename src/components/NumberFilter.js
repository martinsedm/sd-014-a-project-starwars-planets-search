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
                { numberFilters[key] }
              </option>
            ))
        }
      </select>
      <select name="comparison" data-testid="comparison-filter" onChange={ handleChange }>
        <option value="maior que">Maior que</option>
        <option value="mmenor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button type="submit">Filtrar</button>
    </form>
  );
}

export default NumberFilter;
