import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import SelectColumn from './SelectColumn';
import UsedFilters from './UsedFilters';

function Header() {
  const {
    data,
    setFilteredData,
    filters,
    setFilters,
    arrayFilters,
    setArrayFilters,
  } = useContext(Context);
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

  function verifyBigger(planet, column, value) {
    if (Number(planet[column]) > Number(value)) {
      return 1;
    }
    return 0;
  }

  function verifyLesser(planet, column, value) {
    if (Number(planet[column]) < Number(value)) {
      return 1;
    }
    return 0;
  }

  function verifyEqual(planet, column, value) {
    if (Number(planet[column]) === Number(value)) {
      return 1;
    }
    return 0;
  }

  function numericFilter() {
    const { filterByNumericValues } = filters;
    const filtered = data.filter((planet) => {
      let result = 0;
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          result += verifyBigger(planet, column, value);
        }
        if (comparison === 'menor que') {
          result += verifyLesser(planet, column, value);
        }
        if (comparison === 'igual a') {
          result += verifyEqual(planet, column, value);
        }
      });
      return result === filterByNumericValues.length;
    });
    setFilteredData(filtered);
  }

  useEffect(() => numericFilter(), [filters.filterByNumericValues]);

  async function handleClick() {
    await setFilters({
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
      <br />
      <br />
      <br />
      <UsedFilters />
      <br />
    </header>
  );
}

export default Header;
