import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import swapi from '../services/swapi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const getPlanets = async () => {
    const filterResults = await swapi();
    setData(filterResults);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const filterNames = () => {
    if (filters.filterByName.name) {
      return data.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return data;
  };

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        isLoading,
        filterNames,
        setFilters,
        filters,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
