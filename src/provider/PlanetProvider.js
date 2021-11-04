import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]); // guarda info dos planetas;
  const [filtred, setFiltred] = useState([]); // guarda info filtrada dos planetas;
  const [isLoading, setLoading] = useState(true);

  const fetchApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const planetData = async () => {
    const fetchPlanets = await fetch(fetchApi);
    const info = await fetchPlanets.json();
    setData(info.results);
    setFiltred(info.results);
    setLoading(false);
  };

  // quando a aplicação for renderizada pela primeira vez, guarda info da api no estado { data };
  useEffect(() => {
    planetData();
  }, []);

  // função que filtra por nome os resultados do { data } e guarda no estado { filtred };
  const filterByName = (name) => {
    const newData = data.filter((planet) => ((planet.name).toLowerCase()).includes(name));
    setFiltred(newData);
  };

  const contextState = {
    data,
    filtred,
    isLoading,
    filterByName,
  };

  return (
    <GlobalContext.Provider value={ contextState }>
      { children }
    </GlobalContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
