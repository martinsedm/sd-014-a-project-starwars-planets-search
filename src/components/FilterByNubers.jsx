import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';
import Input from './atomos/Input';

export default function Header() {
  const { columns, filters, setFilters,
    planets, setFilterPlanets } = useContext(Context);
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  if (!columns) return <span>Loading...</span>;

  const { column, comparison, value } = filters.filterByNumericValues[0];

  const filtered = planets.filter((planet) => {
    if (comparison === 'maior que') {
      return Number(planet[column]) > Number(value);
    }
    if (comparison === 'menor que') {
      return Number(planet[column]) < Number(value);
    }
    if (comparison === 'igual a') {
      return Number(planet[column]) === Number(value);
    }
    return false;
  });

  const handleClick = (() => {
    setFilterPlanets(filtered);
  });

  return (
    <header>
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((col) => (
          <option key={ col }>{ col }</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comp) => (
          <option key={ comp }>{ comp }</option>
        ))}
      </select>
      <Input
        type="number"
        testId="value"
        name="value"
        onChange={ handleChange }
        value={ value }
      />
      <Button label="Filtrar" onClick={ handleClick } />
    </header>
  );
}
