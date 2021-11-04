import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    planets,
    setPlanets,
  };

  const fetchPlanets = async () => {
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await fetchApi.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
