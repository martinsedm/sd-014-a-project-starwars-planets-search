import React, { useEffect, useState } from 'react';
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

  const { name } = filter.filters.filterByName;
  // Realizando o filtro pelo texto digitado
  useEffect(() => {
    const nameFilter = data.filter((item) => item.name.includes(name));
    setFiltrado(nameFilter);
  }, [name]);

  const context = {
    data,
    PlanetFetch,
    filter,
    setFilter,
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
