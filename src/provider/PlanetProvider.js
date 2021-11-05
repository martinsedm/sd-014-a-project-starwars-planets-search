import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function PlanetProvider({ children }) {
  const INITIAL_STATE = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [data, setData] = useState([]); // guarda info dos planetas;
  const [filtred, setFiltred] = useState([]); // guarda info filtrada dos planetas;
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }] });
  const [categorie, setCategorie] = useState(INITIAL_STATE);
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
  const filterData = () => {
    let newData = data.filter((planet) => ((planet.name)
      .toLowerCase()).includes(filters.filterByName));

    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((filter) => {
        switch (filter.comparison) {
        case 'maior que':
          newData = newData.filter((p) => Number(p[filter.column])
          > Number(filter.value));
          break;
        case 'menor que':
          newData = newData.filter((p) => Number(p[filter.column])
          < Number(filter.value));
          break;
        case 'igual a':
          newData = newData.filter((p) => Number(p[filter.column])
          === Number(filter.value));
          break;
        default:
          break;
        }
      });
    }

    setFiltred(newData);
  };

  const filterCategories = () => {
    const numericFilter = filters.filterByNumericValues;
    setCategorie(categorie.filter((
      (categ) => categ !== numericFilter[numericFilter.length - 1].column)));
  };

  useEffect(() => {
    filterData();
    filterCategories();
  }, [filters]);

  const contextState = {
    categorie,
    data,
    filters,
    filtred,
    isLoading,
    setFilters,
    filterData,
    filterCategories,
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
