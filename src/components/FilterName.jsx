import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function FilterName() {
  const { name, handleChange } = useContext(PlanetasContext);

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <label htmlFor="filtraPeloNome">
        <input
          id="filtraPeloNome"
          data-testid="name-filter"
          placeholder="filtar pelo Nome"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default FilterName;
