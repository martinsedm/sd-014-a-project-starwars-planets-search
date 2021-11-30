import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../Services/fetchAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [name, setName] = useState('');
  const [filtered, setFiltered] = useState(planetsData);
  const [filterNumber, setFilterNumber] = useState([]);
  const [filterSort, setFilterSort] = useState({ column: 'name', sort: 'ASC' });

  const callFetch = () => {
    fetchAPI().then((response) => setPlanetsData(response));
  };

  useEffect(callFetch, []);

  const mainContext = {
    planetsData,
    setPlanetsData,
    setName,
    setFilterNumber,
    setFilterSort,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filterNumber,
      order: filterSort,
    },
    filtered,
    setFiltered,
  };

  return (
    <PlanetsContext.Provider
      value={ mainContext }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
