import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function FilterNumerically() {
  const { numericFilter, setNumericFilter } = useContext(StarsContext);

  function handleChangeNumber({ target }) {
    const { value } = target;
    setNumericFilter({
      ...numericFilter,
      value,
    });
  }

  return (
    <label htmlFor="valor">
      <input
        onChange={ handleChangeNumber }
        data-testid="value-filter"
        value={ numericFilter.value || 0 }
        type="number"
        name="valor"
      />
    </label>
  );
}
