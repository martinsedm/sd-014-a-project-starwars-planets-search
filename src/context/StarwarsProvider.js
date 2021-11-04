import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [starwars, setStarwars] = useState([]);

  const starwarsApi = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await request.json();
    const filteredResults = results.map((result) => {
      delete result.residents;
      return result;
    });
    setStarwars(filteredResults);
  };

  useEffect(() => {
    starwarsApi();
  }, []);

  return (
    <StarwarsContext.Provider value={ { starwars } }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarwarsProvider;
