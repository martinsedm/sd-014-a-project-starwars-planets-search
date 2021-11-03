import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ColsultApiPlanets from '../services/ConsultApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await ColsultApiPlanets();
      setData(response);
    };
    fetchApi();
  }, []);

  return (
    <Context.Provider value={ data }>
      {children}
    </Context.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
