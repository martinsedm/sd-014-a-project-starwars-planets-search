import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const callAPI = async () => {
      const ans = await fetchPlanets();
      setPlanets(ans);
    };
    callAPI();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    isLoading,
    setLoading,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Provider;
