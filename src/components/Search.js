import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Search() {
  const { handleChangeName,
    filters: { filterByName: { name } } } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChangeName }
      />
    </div>
  );
}
