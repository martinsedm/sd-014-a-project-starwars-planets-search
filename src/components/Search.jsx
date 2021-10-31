import React, { useContext } from 'react';
import StarContext from '../context/context';

function Search() {
  const { handleChange } = useContext(StarContext);
  return (
    <form>
      <label htmlFor="filter">
        <input
          id="filter"
          placeholder="Filtrar por nome"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Search;
