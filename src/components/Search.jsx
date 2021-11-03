import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Search = () => {
  const { setName, name } = useContext(PlanetsContext);
  return (
    <div>
      <input
        placeholder="Procurar pelo nome"
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </div>
  );
};

export default Search;
