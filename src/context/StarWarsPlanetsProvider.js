import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanets from '../services';
import StarWarsContext from './StarWarsPlanetsContext';

function StartWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const starWarsPlanetsApi = async () => {
    const result = await fetchStarWarsPlanets();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    starWarsPlanetsApi();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StartWarsPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StartWarsPlanetsProvider;
