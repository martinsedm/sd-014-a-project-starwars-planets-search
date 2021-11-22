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
    filterByNumericValues: [
    ],
  });

  const { filterByNumericValues, filterByName } = filters;

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

  const ChangeFiltersNumeric = ({ column, comparsion, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparsion,
          value,
        },
      ],
    });
  };

  const DataFiltered = data.filter(
    (plt) => plt.name.toLowerCase().includes(filterByName.name.toLowerCase()),
  );

  return (
    <ContextApi.Provider
      value={ {
        data,
        filters,
        ChangeFiltersName,
        DataFiltered,
        ChangeFiltersNumeric,
      } }
    >
      {children}
    </ContextApi.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
