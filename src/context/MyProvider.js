import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([{}]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [filter, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fecthAPI = async () => {
    const dataResponse = await fetch(URL);
    const dataResponseJson = await dataResponse.json();
    const { results } = dataResponseJson;
    setData(results);
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  const byName = (name) => {
    setFilters({
      filterByName: {
        name,
      },
    });
    const filteredNames = data.filter((planet) => planet.name.includes(name));
    setDataFiltered(filteredNames);
    if (name === '') setDataFiltered([]);
  };

  const context = {
    data,
    filter,
    filterFuncs: {
      byName,
    },
    dataFiltered,
  };

  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
