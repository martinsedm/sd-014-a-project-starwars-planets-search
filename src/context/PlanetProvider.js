import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';
import ContextPlanet from './ContextPlanet';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPlanet() {
    const chamadaApi = await Api();
    setData(chamadaApi);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPlanet();
  }, []);

  return (
    <ContextPlanet.Provider value={ { data, isLoading } }>
      {children}
    </ContextPlanet.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
