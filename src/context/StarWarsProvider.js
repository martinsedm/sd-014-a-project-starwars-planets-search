import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planetsByFilter, setPlanetsByFilter] = useState(null);
  const [filter, setFilter] = useState({ filterByName: { } });

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, []);

  const filterByName = (value) => {
    if (value) {
      return setPlanetsByFilter(data.filter((planet) => planet
        .name.toLowerCase().includes(value.toLowerCase())));
    }
    return data;
  };

  const valueDefault = {
    data,
    setData,
    filter,
    setFilter,
    filterByName,
    planetsByFilter,
    setPlanetsByFilter,
  };

  return (
    <StarWarsContext.Provider value={ valueDefault }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
