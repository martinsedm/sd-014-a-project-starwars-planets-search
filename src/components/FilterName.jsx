import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function FilterName() {
  const { handleChange } = useContext(PlanetasContext);

  return (
    <div>
      <h1>Projeto Star Wars | Trybe</h1>
      <label htmlFor="filtraPeloNome">
        <input
          id="filtraPeloNome"
          data-testid="name-filter"
          type="text"
          placeholder="filtar pelo Nome"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FilterName;
