import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ContextApi from './ContextApi';

import ApiStarWarsPlanet from './components';

// Função para prover os states
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const AtribuindoSetData = async () => {
    const API = await ApiStarWarsPlanet();
    setData(API);
  };

  useEffect(() => {
    AtribuindoSetData();
  }, []);

  return (
    <ContextApi.Provider
      value={ {
        data,
      } }
    >
      {children}
    </ContextApi.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
