import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name,
    },
    filterByNumericValues: [],
  });

  const fetchData = async () => {
    try {
      const reponse = await fetch(URL);
      const { results } = await reponse.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    data,
    setName,
    name,
    filters,
    setFilters,
  };

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
