import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../Services/fetchAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  const callFetch = () => {
    fetchAPI().then((response) => setPlanetsData(response));
  };

  useEffect(callFetch, []);

  return (
    <PlanetsContext.Provider
      value={ { planetsData } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
