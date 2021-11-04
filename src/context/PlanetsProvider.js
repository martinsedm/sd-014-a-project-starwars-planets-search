import React from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import useApi from '../hooks/useApi';

export default function PlanetsProvider({ children }) {
  const { data, isLoading } = useApi();

  const exportState = {
    data,
    isLoading,
  };

  return (
    <PlanetsContext.Provider value={ exportState }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
