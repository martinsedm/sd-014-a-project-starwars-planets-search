import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputFilter() {
  const {
    filters,
    handleChange,
  } = useContext(PlanetsContext);

  const {
    filterByName:
      { name } } = filters;
  return (
    <label
      htmlFor="name-input"
      label="filterByName"
    >
      <input
        id="name-filter"
        type="text"
        value={ name }
        onChange={ handleChange }
        placeholder="filterByName"
        data-testid="name-filter"
      />
    </label>
  );
}

export default InputFilter;
