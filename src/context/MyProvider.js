import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const INITIAL_FILTERS = { filters: { filterByName: { name: '' } } };
function MyProvider({ children }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const constextValue = {
    filters,
    setFilters,
  };

  return (
    <MyContext.Provider value={ constextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
