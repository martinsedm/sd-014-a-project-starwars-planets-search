import React, { useContext } from 'react';
import ContextStar from '../context/ContextStar';

function SelectedFilter() {
  const { handleClickSelect,
    handleClickComparison,
    filterComparation,
    columnList,
    filterSelect,
    filters: { filterByNumericValues } } = useContext(ContextStar);
  return (
    <div>
      <select
        data-testid="column-filter"
        value={ filterSelect }
        onChange={ handleClickSelect }
      >
        { !columnList.find(
          (item) => item === 'population',
        ) && <option>population</option> }
        { !columnList.find(
          (item) => item === 'orbital_period',
        ) && <option>orbital_period</option> }
        { !columnList.find(
          (item) => item === 'diameter',
        ) && <option>diameter</option> }
        { !columnList.find(
          (item) => item === 'rotation_period',
        ) && <option>rotation_period</option> }
        { !columnList.find(
          (item) => item === 'surface_water',
        ) && <option>surface_water</option> }
      </select>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <p
          key={ index }
        >
          { `${column} ${comparison} ${value}` }
        </p>))}
      <select
        data-testid="comparison-filter"
        value={ filterComparation }
        onChange={ handleClickComparison }
      >
        <option>menor que</option>
        <option>maior que</option>
        <option>igual a</option>
      </select>
    </div>
  );
}

export default SelectedFilter;
