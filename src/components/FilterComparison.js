import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function FilterComparison() {
  const { numericFilter, setNumericFilter } = useContext(StarsContext);

  function handleChangeComparison({ target }) {
    const { value } = target;
    setNumericFilter({
      ...numericFilter,
      comparison: value,
    });
  }

  return (
    <select
      data-testid="comparison-filter"
      onChange={ handleChangeComparison }
      name="comparison-filter"
    >
      <option>maior que</option>
      <option>igual a</option>
      <option>menor que</option>
    </select>
  );
}
