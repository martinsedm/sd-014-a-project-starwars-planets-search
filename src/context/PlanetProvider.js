import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApiPlanets from '../services/Api';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
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
