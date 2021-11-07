import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValue: [],
      },
    },
  );

  const contextValue = {
    planets,
    setPlanets,
    filter,
    setFilter,
    value,
    setValue,
    column,
    setColumn,
    comparisom: comparison,
    setComparisom: setComparison,
  };

  // Chamada de requisição a API e seta o resultado no estado.
  const fetchPlanets = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const data = await response.json();

    setPlanets(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
