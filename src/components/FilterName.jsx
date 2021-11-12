import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function FilterName() {
  const { filtrar, setFiltrar } = useContext(PlanetasContext);

  return (
    <div>
      <h1>Projeto Star Wars | Trybe</h1>
      <label htmlFor="filtraPeloNome">
        <input
          id="filtraPeloNome"
          data-testid="name-filter"
          type="text"
          placeholder="filtar pelo Nome"
          onChange={ (event) => setFiltrar({
            ...filtrar,
            filtrarPeloNome: {
              name: event.target.value,
            },
          }) }
        />
      </label>
    </div>
  );
}

export default FilterName;
