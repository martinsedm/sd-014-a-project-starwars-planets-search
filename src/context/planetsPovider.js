import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import ReturnApi from '../services/ReturnApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const respostaApi = async () => {
      const resposta = await ReturnApi();
      setData(resposta);
    };
    respostaApi();
  }, []);

  return (
    <PlanetContext.Provider value={ data }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
