import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsContext from './myContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarsProvider({ children }) {
  const [planetas, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      caracteristic: '',
      comparison: '',
      value: 0,
    }],
  });

  const [numericFilter, setNumericFilter] = useState([{
    caracteristic: '',
    comparison: '',
    value: 0,
  }]);

  async function fetchData() {
    setIsLoading(true);
    const responseData = await fetch(URL);
    const data = await responseData.json();
    setPlanet(data.results);
    setIsLoading(false);
  }

  const contextValue = {
    setIsLoading,
    isLoading,
    fetchData,
    numericFilter,
    setNumericFilter,
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
