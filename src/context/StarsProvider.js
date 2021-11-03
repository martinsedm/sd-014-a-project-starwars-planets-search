import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsContext from './myContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarsProvider({ children }) {
  const [filters, setFilter] = useState({});

  const [planetas, setPlanet] = useState([]);

  async function fetchData() {
    const responseData = await fetch(URL);
    const data = await responseData.json();
    setPlanet(data.results);
  }
  const contextValue = {
    filters,
    setFilter,
    planetas,
    setPlanet,
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StarsContext.Provider value={ contextValue }>
      {children}
    </StarsContext.Provider>
  );
}

StarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarsProvider;
