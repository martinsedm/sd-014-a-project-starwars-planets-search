import React, { useState } from 'react';
import PropType from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provide({ children }) {
  const [data, setData] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const PlanetFetch = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const dataResults = await response.json();
    setData(dataResults.results);
  };

  // Realizando o filtro pelo texto digitado
  const filterByName = () => {

  };

  const context = {
    data,
    PlanetFetch,
    filter,
    setFilter,
    filterByName,
    filtrado,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provide.propTypes = {
  children: PropType.node.isRequired,
};

export default Provide;
