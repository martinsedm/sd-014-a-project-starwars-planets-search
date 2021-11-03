import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsSearch from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [filters, setFilters] = useState();
  const [planetsFiltred, setPlanetsFiltred] = useState([]);

  const contextValue = {
    filters,
    setFilters,
    planetsFiltred,
    setPlanetsFiltred,
  };
  return (
    <StarwarsSearch.Provider value={ contextValue }>
      {children}
    </StarwarsSearch.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
