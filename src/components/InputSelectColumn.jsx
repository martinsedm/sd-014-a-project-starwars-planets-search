import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputSelectColumn() {
  const {
    numFilter,
    handleSelectColumn,
    filterColumn,
  } = useContext(PlanetsContext);

  const { column } = numFilter;

  return (
    <select
      onChange={ handleSelectColumn }
      value={ column }
      data-testid="column-filter"
    >
      { filterColumn.map((COLUMN, index) => (
        <option value={ COLUMN } key={ index }>{COLUMN}</option>
      )) }
    </select>
  );
}

export default InputSelectColumn;
