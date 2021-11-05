import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]); // guarda info dos planetas;
  const [filtred, setFiltred] = useState([]); // guarda info filtrada dos planetas;
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: '' });

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
  const filterData = () => {
    let newData = data.filter((planet) => ((planet.name)
      .toLowerCase()).includes(filters.filterByName));

    if (filters.filterByNumericValues) {
      switch (filters.filterByNumericValues.comparison) {
      case 'maior que':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        > Number(filters.filterByNumericValues.value));
        break;
      case 'menor que':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        < Number(filters.filterByNumericValues.value));
        break;
      case 'igual a':
        newData = data.filter((p) => Number(p[filters.filterByNumericValues.column])
        === Number(filters.filterByNumericValues.value));
        break;
      default:
        break;
      }
    }

    setFiltred(newData);
  };

  const contextState = {
    data,
    filters,
    filterData,
    filtred,
    isLoading,
    setFilters,
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
