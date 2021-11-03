import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarsWarsContext from './StarWarsContext';
import fetchPlanets from '../services';

function StarsWarsProvider(props) {
  const [planets, setPlanets] = useState([]);
  const [planetsRender, setPlanetsRender] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  const { children } = props;

  const getPlanets = async () => {
    try {
      setIsFetching(true);
      const results = await fetchPlanets();
      setPlanets(results);
      setPlanetsRender([...results]);
      setIsFetching(false);
      setError({ hasError: false, message: '' });
    } catch (err) {
      setError({ hasError: true, message: err.message });
      setIsFetching(false);
    }
  };

  const context = {
    planets,
    planetsRender,
    isFetching,
    error,
    getPlanets,
  };

  return (
    <StarsWarsContext.Provider value={ context }>
      { children }
    </StarsWarsContext.Provider>
  );
}

StarsWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarsWarsProvider;
