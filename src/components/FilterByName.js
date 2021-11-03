import React, { useContext } from 'react';
import FilterProvider from '../context/FilterProvider';

function FilterByName() {
  const { setName } = useContext(FilterProvider);

  return (
    <>
      <label htmlFor="input-name">
        <input
          type="text"
          name="name"
          id="input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <button type="submit">Filtrar</button>
    </>
  );
}

export default FilterByName;
