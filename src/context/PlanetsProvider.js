import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ColsultApiPlanets from '../services/ConsultApiPlanets';

function PlanetsProvider({ children }) {
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
      const response = await ColsultApiPlanets();
      setData(response);
    };
    fetchApi();
  }, []);

  const value = {
    data,
    filter,
    setFilter,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
