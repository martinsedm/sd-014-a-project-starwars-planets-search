import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import planetsApi from '../services/dataAPI';

function Provider({ children }) {
  const [dataPlanets, setDataPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    setLoading(true);
    planetsApi().then((dataa) => {
      const planetsResults = dataa.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setDataPlanets(planetsResults);
      setLoading(false);
    });
  }, []);

  const changeNameFilter = (name) => {
    setFilter({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name,
      },
    });
  };

  const addNumericFilter = (newFilter) => {
    setFilter({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(newFilter),
    });
  };

  const context = {
    dataPlanets,
    isLoading,
    filters,
    changeNameFilter,
    addNumericFilter,
  };

  return (
    <planetsContext.Provider value={ context }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
