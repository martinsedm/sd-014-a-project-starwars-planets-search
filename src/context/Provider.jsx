import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const contextValue = {
    filter,
    setFilter,
    data,
    setData,
  };

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseData = await response.json();
    return responseData.results;
  };

  function filterPlanets() {
    data.filter((planet) => {
      const result = planet.name.includes(filter.name);
      return result
    });
  }
  console.log(filterPlanets(), "oi");
  filterPlanets();

  useEffect(() => {
    getPlanets().then(setData);
  }, []);

  // console.log(data, 'provider');

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
