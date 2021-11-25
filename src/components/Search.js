import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Search() {
  const { setName, name } = useContext(StarWarsContext);

  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder="Filter by name"
        data-testid="name-filter"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </div>
  );
}
