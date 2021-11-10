import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [requestError, setRequestError] = useState('');
  const [filterMethod, setFilterMethod] = useState('noFilter');
  const [filters, setFilters] = useState();

  const [availableColumns, setAvailableColumns] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  const contextValue = {
    availableColumns,
    data,
    filterMethod,
    filters,
    requestError,
    setAvailableColumns,
    setFilterMethod,
    setFilters,
  };

  useEffect(() => {
    async function getPlanets() {
      try {
        const fetchResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
        const objResponse = await fetchResponse.json();
        const planetsResponse = objResponse.results
          .filter((planetObj) => delete planetObj.residents);
        setData(planetsResponse);
      } catch (error) {
        const errorMessage = error.message;
        setRequestError(`Error message: ${errorMessage}`);
      }
    }

    getPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
