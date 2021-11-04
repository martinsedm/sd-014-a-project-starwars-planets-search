import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import SelectColumn from './SelectColumn';

function Header() {
  const { data, setFilteredData, filters, setFilters, arrayFilters, setArrayFilters } = useContext(Context);
  const [columnName, setColumnName] = useState('population');
  const [comparisonName, setComparisonName] = useState('maior que');
  const [numericValue, setNumericValue] = useState(0);

  function handleChange({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
    const filtered = data.filter((planet) => planet.name.includes(target.value));
    setFilteredData(filtered);
  }

  function numericFilter() {
    const filtered = data.filter((planet) => {
      if (comparisonName === 'maior que') {
        return Number(planet[columnName]) > Number(numericValue);
      }
      if (comparisonName === 'menor que') {
        return Number(planet[columnName]) < Number(numericValue);
      }
      return Number(planet[columnName]) === Number(numericValue);
    });
    setFilteredData(filtered);
  }

  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: columnName,
          comparison: comparisonName,
          value: numericValue,
        },
      ],
    });
    numericFilter();
    setArrayFilters([...arrayFilters, `${columnName} ${comparisonName} ${numericValue}`]);
  }

  return (
    <header>
      <input
        type="text"
        placeholder="Filtre por nome"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      <br />
      <br />
      <br />
      <SelectColumn setColumnName={ setColumnName } />
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonName(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setNumericValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
