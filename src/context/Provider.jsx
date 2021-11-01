import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './myContext';

export default function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchApi = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const { results } = responseJSON;
    setData(results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
  });

  const changeFilters = (type, value) => {
    setFilters({
      ...filters,
      [type]: value,
    });
  };

  const filterData = () => {
    const { name } = filters.filtersByName;
    if (data.length > 1) {
      return data.filter((planet) => planet.name.includes(name));
    }
    return [{}];
  };

  const context = {
    data: filterData(),
    changeFilters,
  };
  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
