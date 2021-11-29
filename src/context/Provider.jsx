import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import AppContext from './StarWarsContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',

  });

  const [numberFilters, setNumberFilters] = useState({
    filterByNumericValues: [],
  });

  const { filterByNumericValues } = numberFilters;

  const changeNameFilter = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  const handleDeleteFilter = (filtered) => {
    const newFilter = filterByNumericValues.filter((item) => item.column !== filtered);
    setNumberFilters({ ...numberFilters, filterByNumericValues: newFilter });
  };

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    return data;
  };

  const getPlanetsData = async () => {
    const { results } = await getPlanets();
    const resultsMapped = results.map((result) => {
      delete result.residents;
      return result;
    });
    setPlanets(resultsMapped);
    setLoading(false);
  };

  const contextValue = {
    order,
    setOrder,
    changeNameFilter,
    loading,
    setLoading,
    numberFilters,
    setNumberFilters,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    planets,
    setPlanets,
    handleDeleteFilter,
    getPlanetsData,
  };

  useEffect(() => {
    getPlanetsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);// remover

  useEffect(() => {
  }, [numberFilters]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
