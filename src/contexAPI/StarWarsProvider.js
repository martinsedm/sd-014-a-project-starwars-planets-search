import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  const planetsAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    setData(planets.results);
  };

  useEffect(() => {
    planetsAPI();
  }, []);

  const context = {
    data,
    setData,
    title,
    setTitle,
  };
  return (
    <starWarsContext.Provider value={ context }>
      {children}
    </starWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
