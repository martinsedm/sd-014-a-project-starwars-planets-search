import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import requestAPI from '../services/RequerimentoAPI';
import ContextTabela from '../context/ContextTabela';

function ProviderTabela({ children }) {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await requestAPI();
      planets.results.forEach((planet) => {
        delete planet.residents;
      });

      setData(planets.results);
      setTitles(Object.keys(planets.results[0]));
    };
    getPlanets();
  }, []);

  const myContext = { data, titles };

  return (
    <ContextTabela.Provider value={ myContext }>
      {children}
    </ContextTabela.Provider>
  );
}

ProviderTabela.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProviderTabela;
