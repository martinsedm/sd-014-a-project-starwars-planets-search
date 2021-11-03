import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApiPlanets from '../services/Api';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [change, setChange] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetchApiPlanets();
      setData(response);
    };
    fetchApi();
  }, []);

  const value = {
    data,
    setData,
    filter,
    setFilter,
    options,
    setOptions,
    change,
    setChange,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>

  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetProvider;
