import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../api/getApi';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const data = {
    planets,
    setPlanets,
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getApi();
      setPlanets(response.results);
    };
    fetchApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
