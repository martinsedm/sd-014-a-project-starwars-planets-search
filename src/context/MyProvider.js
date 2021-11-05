import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([{}]);
  const [dataFiltered, setDataFiltered] = useState(data);
  const [filter, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fecthAPI = async () => {
    const dataResponse = await fetch(URL);
    const dataResponseJson = await dataResponse.json();
    const { results } = dataResponseJson;
    setData(results);
    setDataFiltered(results);
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  const byName = (name) => {
    setFilters({
      ...filter,
      filterByName: {
        name,
      },
    });
    const filteredNames = data.filter((planet) => planet.name.includes(name));
    setDataFiltered(filteredNames);
  };

  const byStats = (column, comparison, value) => {
    setFilters({
      ...filter,
      filterByNumericValues: [
        ...filter.filterByNumericValues,
        {
          column,
          comparison,
          value,
        }],
    });

    const filteredStats = dataFiltered.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (Number(planet[column]) > Number(value));
      case 'menor que':
        return (Number(planet[column]) < Number(value));
      case 'igual a':
        return (Number(planet[column]) === Number(value));
      default:
        return true;
      }
    });

    setDataFiltered(filteredStats);
  };

  const removeFIlters = (column) => {
    setDataFiltered(data);
    setFilters({
      ...filter,
      filterByNumericValues:
        filter.filterByNumericValues.filter((f) => f.column !== column),
    });
  };

  const context = {
    data,
    filter,
    filterFuncs: {
      byName,
      byStats,
      removeFIlters,
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
