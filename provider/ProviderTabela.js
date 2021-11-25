import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import requestAPI from '../services/RequerimentoAPI';
import ContextTabela from '../context/ContextTabela';

function ProviderTabela({ children }) {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  // const [filterName, setFilterName] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValue: [],
  });
  // mudança de state para filter.
  const [update, setUptade] = useState(false);
  useEffect(() => {
    const getPlanets = async () => {
      const planets = await requestAPI();
      planets.results.forEach((planet) => {
        delete planet.residents;
      });

      setData(planets.results);
      setTitles(Object.keys(planets.results[0]));
    };
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  // const myContext = { data, titles, filterName, handleChange };
  const filteredPlanets = useCallback(() => {
    const { column, comparison, value } = filters.filterByNumericValue[0];

    const filterInAPI = data.filter((element) => {
      if (comparison === 'maior que') {
        return Number(element[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(element[column]) < Number(value);
      }
      return Number(element[column]) === Number(value);
    });
    setData(filterInAPI);
  }, [data, filters]);

  useEffect(() => {
    if (update === true) {
      filteredPlanets();
    }
    setUptade(false);
  }, [filteredPlanets, update]);

  const handleClick = (state) => {
    setFilters(
      { ...filters, filterByNumericValue: [...filters.filterByNumericValue, state] },
    );
    setUptade(true);
  };

  const myContext = {
    data,
    titles,
    filters,
    handleChange,
    handleClick,
  };

  return (
    <ContextTabela.Provider value={ myContext }>
      { children }
    </ContextTabela.Provider>
  );
}

ProviderTabela.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProviderTabela;
