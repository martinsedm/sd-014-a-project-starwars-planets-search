import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services';

function StarProvider(props) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    setPlanets(results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    planets,
  };

  const { children } = props;

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
