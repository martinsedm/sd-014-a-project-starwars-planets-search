import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function RemoverFilter() {
  const {
    filtrar: { filtrarValoresNumericos },
    removerNumerosFiltrados,
  } = useContext(PlanetasContext);

  return (
    <div>
      {
        filtrarValoresNumericos.map((filtra) => (
          <div key={ filtra.column } data-testid="filter">
            <div>
              { `${filtra.column} ${filtra.comparison} ${filtra.value}` }
            </div>
            <button
              type="button"
              onClick={ () => removerNumerosFiltrados(filtra.column) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default RemoverFilter;
