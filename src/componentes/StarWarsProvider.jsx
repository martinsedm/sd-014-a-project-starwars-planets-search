import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ContextApi from './ContextApi';

import ApiStarWarsPlanet from './components';

// Função para prover os states
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const AtribuindoSetData = async () => {
    const API = await ApiStarWarsPlanet();
    setData(API);
  };

  useEffect(() => {
    AtribuindoSetData();
  }, []);

  const ChangeFiltersName = (name) => {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  const DataFiltered = data.filter((plt) => (
    plt.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));

  return (
    <ContextApi.Provider
      value={ {
        data, filters, ChangeFiltersName, DataFiltered,
      } }
    >
      {children}
    </ContextApi.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
