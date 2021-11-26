import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fecthPlanets from '../helper/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [unFilterPlanets, setUnFilterPlanets] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const data = await fecthPlanets();
      setUnFilterPlanets([...data.results]);
      console.log('dataResults', data.results);
      // console.log('unFilterPlanets', unFilterPlanets);
    }
    getPlanets();
    // if (!planets) {
    //   setPlanets([...unFilterPlanets]);
    // }
  }, []);

  const Values = {
    unFilterPlanets,
    planets,
    setPlanets,
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
