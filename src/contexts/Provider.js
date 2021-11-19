import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';
import fecthPlanets from '../helper/fetchPlanets';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchByPlanets = async () => {
    const response = await fecthPlanets();

    setPlanets(response);
  };

  // useEffect(() => {
  //   fecthPlanets();
  // }, []);

  const Values = {
    fetchByPlanets,
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
