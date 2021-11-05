import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [results, setResults] = useState([]);
  const [fullResults, setFullResults] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('population');
  const [selectedComparison, setSelectedComparison] = useState('>');
  const [inputedQuantity, setInputedQuantity] = useState('0');
  const contextValue = {
    results,
    setResults,
    fullResults,
    setFullResults,
    filters,
    setFilters,
    selectedCategory,
    setSelectedCategory,
    selectedComparison,
    setSelectedComparison,
    inputedQuantity,
    setInputedQuantity,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: PropTypes.node,
};

export default AppProvider;
