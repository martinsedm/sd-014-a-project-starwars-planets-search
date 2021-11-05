import React, { useContext } from 'react';
import starContext from '../context/starContext';

export default function SearchInputs() {
  const { handleChange } = useContext(starContext);
  return (
    <form>
      <label htmlFor="planetFilter">
        Filter By Planet:
        <input
          data-testid="name-filter"
          onChange={ (event) => handleChange(event.target.value) }
          type="text"
          name="planetFilter"
        />
      </label>
    </form>
  );
}
