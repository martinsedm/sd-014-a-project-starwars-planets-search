import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetContext from './PlanetContext';
import { PlanetAPI } from '../services/PlanetAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  });

  useEffect(() => {
    async function getPlanet() {
      setData(await PlanetAPI());
    }

    getPlanet();
  }, []);

  const nameFilterChange = (name) => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  };

  const submitNumFilter = (column, comparison, value) => {
    setFilter({ filters: { ...filter.filters,
      filterByNumericValues: [...filter.filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        }] } });
  };

  return (
    <PlanetContext.Provider
      value={ {
        data,
        name: filter.filters.filterByName.name,
        nameFilterChange,
        byNumericValues: filter.filters.filterByNumericValues,
        submitNumFilter,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = { children: PropTypes.node.isRequired,
};

export default PlanetProvider;
