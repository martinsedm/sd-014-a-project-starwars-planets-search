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
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  });

  const PlanetFetch = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const dataResults = await response.json();
    setData(dataResults.results);
  };

  const { filters: { filterByName: { name } } } = filter;
  // Realizando o filtro pelo texto digitado
  useEffect(() => {
    const nameFilter = data.filter((item) => item.name.includes(name));
    setFiltrado(nameFilter);
  }, [name]); // name

  const context = {
    data,
    filter,
    filtrado,
    setFiltrado,
    PlanetFetch,
    setFilter,
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
