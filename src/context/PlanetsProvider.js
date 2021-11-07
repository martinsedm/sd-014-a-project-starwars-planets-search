import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const { Provider } = PlanetsContext;

function PlanetsProvider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const context = { filters, setFilters };

  return <Provider value={ context }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
