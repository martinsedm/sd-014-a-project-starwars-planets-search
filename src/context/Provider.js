import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starContext from './starContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  });
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // useEffect(() => { console.log(data); }, [data]);

  async function getDataFromAPI() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const treatResponse = await response.json();
    const { results } = treatResponse;
    const result = results.filter((planet) => delete planet.residents);
    setData(result);
    setBackup(result);
  }

  function handleChange(string) {
    setFilters({ ...filters,
      filterByName: {
        name: string,
      },
    });
  }

  const filterByASC = (order) => {
    const UM = -1;
    const orderData = data.sort((a, b) => {
      if (order === 'name') {
        if (a[order] > b[order]) { return 1; }
        if (a[order] < b[order]) { return UM; }
        return 0;
      }
      return Number(a[order]) - Number(b[order]);
    });
    setData(orderData);
  };
  const filterByDESC = (order) => {
    const UM = -1;
    const orderData = data.sort((a, b) => {
      if (order === 'name') {
        if (b[order] > a[order]) { return 1; }
        if (b[order] < a[order]) { return UM; }
        return 0;
      }
      return Number(b[order]) - Number(a[order]);
    });
    setData(orderData);
  };

  const handleclick = (order, orderBy) => {
    if (orderBy === 'ASC') { filterByASC(order); } else { filterByDESC(order); }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const contextValue = {
    handleclick,
    data,
    handleChange,
    setData,
    setFilters,
    filters,
    options,
    setOptions,
    backup,
  };

  return (
    <starContext.Provider value={ contextValue }>
      {children}
    </starContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
