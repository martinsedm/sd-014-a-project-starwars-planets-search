import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputNumberFilter() {
  const {
    numFilter,
    handleChangeNumber,
  } = useContext(PlanetsContext);

  const { value } = numFilter;

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
