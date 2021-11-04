import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((object) => delete object.residents);
        return json;
      })
      .then((object) => setPlanets(object.results));
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { planets } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
