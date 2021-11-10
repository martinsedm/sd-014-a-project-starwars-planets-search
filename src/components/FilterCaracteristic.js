import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function FilterCaracteristic() {
  const { numericFilter, setNumericFilter } = useContext(StarsContext);
  const caracteristics = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];

  function handleChange({ target }) {
    const { value } = target;
    setNumericFilter({
      ...numericFilter,
      caracteristic: value,
    });
  }

  return (
    <select
      data-testid="column-filter"
      onChange={ handleChange }
      value={ numericFilter.caracs }
    >
      {caracteristics
        .map((caracteristic, i) => (
          <option
            key={ i }
            className="form-control"
          >
            {caracteristic}
          </option>))}
    </select>
  );
}
