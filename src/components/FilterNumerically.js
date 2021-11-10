import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function FilterNumerically() {
  const { filters, setFilter } = useContext(StarsContext);

  function handleChangeNumber({ target }) {
    const { value } = target;
    setFilter({
      ...filters,
      value,
    });
  }

  const { filterByNumericValues } = filters;
  return (
    <label htmlFor="valor">
      <input
        onChange={ handleChangeNumber }
        data-testid="value-filter"
        value={ filterByNumericValues.value || 0 }
        type="number"
        name="valor"
      />
    </label>
  );
}
