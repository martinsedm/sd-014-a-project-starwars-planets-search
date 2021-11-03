import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
// import ReturnApi from '../services/ReturnApi';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const searchApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchApiPlanets = async () => {
    const response = await fetch(searchApi);
    const json = await response.json();
    const planets = json.results;
    setData(planets);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiPlanets();
  }, []);

  const context = {
    data,
    isLoading };

  return (
    <PlanetContext.Provider value={ context }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
