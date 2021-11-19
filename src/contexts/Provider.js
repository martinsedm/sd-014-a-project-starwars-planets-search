import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import fecthPlanets from '../helper/fetchPlanets';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const data = await fecthPlanets();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);

  const Values = {
    planets,
  };

  return (
    <Context.Provider value={ Values }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
