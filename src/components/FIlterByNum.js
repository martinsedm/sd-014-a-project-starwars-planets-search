import React, { useContext, useState } from 'react';
import filterContext from '../context/filterContext';
import getApiStarWars from '../services/APIStarwars';

const FilterByNum = () => {
  const { filters, setFilters, setData, data } = useContext(filterContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [selectColumns, setSelectColumns] = useState(columns);
  const retAPi = [...data];

  const handleClick = async (coluna, comparacao, valor) => {
    if (coluna && comparacao && valor) {
      const filterPlanets = retAPi.filter((planet) => {
        const planetNumber = Number(planet[coluna]);
        const valueComparison = Number(valor);
        switch (comparacao) {
        case 'maior que':
          return planetNumber > valueComparison;
        case 'menor que':
          return planetNumber < valueComparison;
        case 'igual a':
          return planetNumber === valueComparison;
        default:
          return planetNumber;
        }
      });
      setData(filterPlanets);
      setSelectColumns(selectColumns.filter((col) => col !== coluna));
    } else {
      await getApiStarWars('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((result) => setData(result));
    }
  };

  return (
    <>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {selectColumns.map((col) => <option key={ col }>{col}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(
          target.value,
        ) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="input-number">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilters({
            ...filters,
            filterByNumericValues: [...filters.filterByNumericValues,
              { column, comparison, value }],
          });
          handleClick(column, comparison, value);
        } }
      >
        Filtrar
      </button>
    </>
  );
};

export default FilterByNum;
