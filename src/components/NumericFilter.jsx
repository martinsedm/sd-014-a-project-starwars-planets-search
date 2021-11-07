import React, { useContext, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NumericFilter() {
  const { handleLog, deleteColumn } = useContext(PlanetsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState('');

  // const handleChange = ({ target }) => {
  //   const {  value } = target;
  //   const { filters } = filter;

  // };

  return (
    <form>
      <select
        id="filter"
        name="column"
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        <option value="population">population</option>
        <option value="orbital_perioda">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        data-testid="value-filter"
        type="number"
        onChange={ ({ target: { value } }) => setNumber(Number(value)) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => {
          handleLog(column, comparison, number);
          deleteColumn(column);
        } }
      >
        filtrar

      </button>
    </form>
  );
}

// const { filters } = filter;
// console.log(value);
// setFilter({ ...filters,
//   filterByNumericValues: [...filters.filterByNumericValues, {
//     [name]: value,
//   }] });
// console.log(filters);

export default NumericFilter;
