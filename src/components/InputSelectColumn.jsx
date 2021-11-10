import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { columnList } from '../services/data';

function InputSelectColumn() {
  const {
    filters,
    handleSelectColumn,
  } = useContext(PlanetsContext);

  const { filterByNumericValues: { column } } = filters;

  return (
    <select
      onChange={ handleSelectColumn }
      value={ column }
      data-testid="column-filter"
    >
      { columnList.map((COLUMN, index) => (
        <option value={ COLUMN } key={ index }>{COLUMN}</option>
      )) }
    </select>
  );
}

export default InputSelectColumn;
