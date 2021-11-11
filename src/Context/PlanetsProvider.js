import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const { results } = await fetchAPI();
    setData(results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    data,
    getPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
