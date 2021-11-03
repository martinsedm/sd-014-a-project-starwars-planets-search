import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ColsultApiPlanets from '../services/ConsultApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const [input, setInput] = useState([
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
      const response = await ColsultApiPlanets();
      setData(response);
    };
    fetchApi();
  }, []);

  const value = {
    data,
    setData,
    filter,
    setFilter,
    input,
    setInput,
    change,
    setChange,
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
