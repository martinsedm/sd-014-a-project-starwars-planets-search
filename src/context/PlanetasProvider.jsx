import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetasContext from './PlanetasContext';
import DataPlanetasAPI from '../services/DataPlanetasAPI';

function PlanetasProvider({ children }) {
  const INITIAL_STATE = {
    filtrarPeloNome: {
      name: '',
    },
    filtrarValoresNumericos: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  };

  const [planetas, setPlanetas] = useState([]);
  const [isCarregando, setCarregando] = useState(true);
  const [filtrar, setFiltrar] = useState(INITIAL_STATE);

  const fetchPlanetasAPI = async () => {
    const { results } = await DataPlanetasAPI();
    setPlanetas(results);
    setCarregando(false);
  };

  useEffect(() => {
    fetchPlanetasAPI();
  }, []);

  const planetasFiltrados = planetas.filter((planeta) => (
    planeta.name.toLowerCase().includes(filtrar.filtrarPeloNome.name.toLowerCase())
  ));

  const contextState = {
    planetas,
    isCarregando,
    planetasFiltrados,
    filtrar,
    setFiltrar,
  };

  return (
    <PlanetasContext.Provider value={ contextState }>
      { children }
    </PlanetasContext.Provider>
  );
}

PlanetasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetasProvider;
