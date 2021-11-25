import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';
import ContextPlanet from './ContextPlanet';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filters, setFilters] = useState({
    filterByNumericValues: [],
  });

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  async function fetchPlanet() {
    const chamadaApi = await Api();
    setData(chamadaApi);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchPlanet();
  }, []);

  const handleChange = ({ target }) => {
    const filterSearch = target.value;

    setFilter({
      ...filter,
      filterByName: {
        name: filterSearch,
      },
    });
  };

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    filter,
    setFilter,
    handleChange,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filters,
    setFilters,
  };
  return (
    <ContextPlanet.Provider value={ context }>
      {children}
    </ContextPlanet.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
