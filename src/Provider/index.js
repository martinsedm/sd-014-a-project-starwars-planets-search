import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context';
import requestPlanets from '../util/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const [filteredData, setFilteredData] = useState({});

  const populatePlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  const setFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
    setFilteredData(Object.values(data)
      .filter(({ name: planetName }) => planetName.includes(name)));
  };

  const context = {
    data,
    populatePlanets,
    filters,
    setFilterByName,
    filteredData,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
