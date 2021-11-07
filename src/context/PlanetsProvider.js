import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetInfo, setPlanetsInfo] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  });

  return (
    <PlanetsContext.Provider
      value={ {
        planetInfo,
        setPlanetsInfo,
        setFilters,
        filters } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default PlanetsProvider;
