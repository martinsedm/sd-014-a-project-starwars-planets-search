import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputNumberFilter() {
  const {
    filters,
    handleChangeNumber,
  } = useContext(PlanetsContext);

  const { filterByNumericValues: { value } } = filters;

  return (
    <label
      htmlFor="value-input"
      label="filterByName"
    >
      <input
        id="value-filter"
        type="number"
        value={ value }
        onChange={ handleChangeNumber }
        placeholder="filterByNumericValues"
        data-testid="value-filter"
      />
    </label>
  );
}

export default InputNumberFilter;
