import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Filter() {
  const { name, setFilterByName } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      value={ name }
      onChange={ (e) => setFilterByName(e.target.value) }
    />
  );
}

export default Filter;
