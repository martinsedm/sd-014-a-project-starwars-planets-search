import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context';
import requestPlanets from '../util/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});

  const populatePlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  const context = [
    data,
    populatePlanets,
  ];

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
