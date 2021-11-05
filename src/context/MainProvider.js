import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';
import getPlanetsAPI from '../API/starwarsPlanetAPI';

function MainProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  const funcfetch = async () => {
    const { results } = await getPlanetsAPI();
    setAllPlanets(results);
  };

  const enviar = {
    funcfetch,
    allPlanets,
    setAllPlanets,
    filters,
    setFilters,
  };

  return (
    <MainContext.Provider value={ enviar }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MainProvider;
