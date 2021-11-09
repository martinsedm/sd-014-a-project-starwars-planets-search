import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetContext from './PlanetContext';
import { PlanetAPI } from '../services/PlanetAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]); // Array that contains ALL the initial planet data that was fetched from the API
  const [numFilterData, setNumFilterData] = useState([]); // contains the planets after the tests made only by the filterByNumericValues
  const [planets, setPlanets] = useState([]); // Array that contains the planets that pass the filter tests to be rendered in the table
  const [filters, setFilters] = useState({
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
  });

  useEffect(() => { // "ComponentDidMount" initial API fetch
    const validKeys = ['name', 'rotation_period', 'orbital_period', 'diameter',
      'climate', 'gravity', 'terrain', 'surface_water', 'population',
      'films', 'created', 'edited', 'url'];

    async function initialFetch() {
      const rawData = await PlanetAPI();
      const correctData = rawData.map((item) => ( // Validate the fetched data info with only the relevant object keys we want
        validKeys.reduce((acc, cur) => {
          acc[cur] = item[cur];
          return acc;
        }, {})
      ));
      setData(correctData);
      setNumFilterData(correctData);
    }
    initialFetch();
  }, []);

  return (
    <PlanetContext.Provider
      value={ {
        data,
        planets,
        setPlanets,
        filters,
        setFilters,
        numFilterData,
        setNumFilterData,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = { children: PropTypes.node.isRequired,
};

export default PlanetProvider;
