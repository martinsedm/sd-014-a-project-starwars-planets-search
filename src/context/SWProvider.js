import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState();

  const planetsAPI = async () => {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    return planets.json()
      .then((response) => {
        response.results.map((i) => delete i.residents);
        return response.results;
      });
  };

  useEffect(() => {
    planetsAPI().then((result) => setData(result));
  }, []);

  return (
    <SWContext.Provider value={ { data } }>
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;
