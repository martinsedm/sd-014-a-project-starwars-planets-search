import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { comparisonList } from '../services/data';

function InputSelectComparison() {
  const {
    numFilter,
    handleSelectComparison,
  } = useContext(PlanetsContext);

  const { comparison } = numFilter;

  return (
    <select
      onChange={ handleSelectComparison }
      value={ comparison }
      data-testid="comparison-filter"
    >
      { comparisonList.map((COMPARISON, index) => (
        <option value={ COMPARISON } key={ index }>{ COMPARISON }</option>
      ))}
    </select>
  );
}

export default InputSelectComparison;
