import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetasContext from './PlanetasContext';
import DataPlanetasAPI from '../services/DataPlanetasAPI';

function PlanetasProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [isCarregando, setCarregando] = useState(true);

  const fetchPlanetasAPI = async () => {
    const { results } = await DataPlanetasAPI();
    setPlanetas(results);
    setCarregando(false);
  };

  useEffect(() => {
    fetchPlanetasAPI();
  }, []);

  const contextState = {
    planetas,
    isCarregando,
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
