import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './starContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([{}]);

  const planetApi = async () => {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    let results = await planets.json();
    results = results.results;
    results.forEach((result) => {
      delete result.residents;
    });
    setData(results);
    return results;
  };

  useEffect(() => {
    planetApi();
  }, []);

  const values = {
    data,
  };

  return (
    <div>
      <main>
        <StarContext.Provider value={ values }>
          {children}
        </StarContext.Provider>
      </main>
    </div>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
