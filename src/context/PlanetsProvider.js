import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const { Provider } = PlanetsContext;
const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const response = await fetch(URL);
    const { results } = await response.json();
    setPlanets(results);
  };

  const context = { getPlanets, planets };

  return <Provider value={ context }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
