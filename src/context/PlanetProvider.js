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
  const [options, setOptions] = useState([['population', 'Population'],
    ['orbital_period', 'Orbital Period'], ['diameter', 'Diameter'],
    ['rotation_period', 'Rotation Period'], ['surface_Water', 'Surface Water']]); // Used in the NumericFilter component
  const [select, setSelect] = useState(options[0][0]);

  useEffect(() => {
    async function getPlanet() {
      setData(await PlanetAPI());
    }

    getPlanet();
  }, []);

  useEffect(() => {
    setSelect(options[0][0]);
  }, [options]);

  const nameFilterChange = (name) => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  };

  // const updateNumFilterSelector = () => {
  //   setSelect(options[0][0]);
  // };

  const submitNumFilter = (column, comparison, value) => {
    setFilter({ filters: { ...filter.filters,
      filterByNumericValues: [...filter.filters.filterByNumericValues,
        { column, comparison, value }] } });
    setOptions(options.filter((ele) => ele[0] !== column));
  };

  return (
    <PlanetContext.Provider
      value={ {
        data,
        name: filter.filters.filterByName.name,
        nameFilterChange,
        byNumericValues: filter.filters.filterByNumericValues,
        select,
        setSelect,
        options,
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
