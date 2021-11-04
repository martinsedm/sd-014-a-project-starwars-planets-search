import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';
import getPlanetsAPI from '../API/starwarsPlanetAPI';

function MainProvider({ children }) {
  const [planets, setplanets] = useState([]);

  const funcfetch = async () => {
    const { results } = await getPlanetsAPI();
    setplanets(results);
  };

  const enviar = [
    funcfetch,
    planets,
  ];

  return (
    <MainContext.Provider value={ enviar }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainProvider;
