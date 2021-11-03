import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Search() {
  const { handleChange } = useContext(TableContext);

  return (
    <form>
      <label htmlFor="filter">
        <input
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Search;
