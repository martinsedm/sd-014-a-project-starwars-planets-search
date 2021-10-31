import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarContext from './context';

function Provider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const getPlanets = async () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planets) => setData(planets.results))
      .then(() => setLoading(false));
  };

  const value = {
    data,
    setData,
    loading,
    setLoading,
    getPlanets,
  };

  return (
    <StarContext.Provider value={ value }>
      {children}
    </StarContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
