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
    order: {
      column: 'name',
      sort: 'ASC',
    },
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

  const RemoverFilterNumeric = (filterRemove) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter(({ column }) => column !== filterRemove),
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
        setFilters,
        ChangeFiltersName,
        DataFiltered,
        ChangeFiltersNumeric,
        RemoverFilterNumeric,
      } }
    >
      {children}
    </ContextApi.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
