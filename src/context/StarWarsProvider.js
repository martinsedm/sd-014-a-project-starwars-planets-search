import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
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
    comparison,
    setComparison,
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
