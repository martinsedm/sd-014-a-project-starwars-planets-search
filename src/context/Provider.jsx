import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import AppContext from './StarWarsContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [numberFilters, setNumberFilters] = useState({
    filterByNumericValues: [],
  });

  const { filterByNumericValues } = numberFilters;

  const changeNumericClick = () => {
    setNumberFilters({
      ...numberFilters,
      filterByNumericValues: [...numberFilters.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  const changeNameFilter = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
    setSearchName(target.value);
  };

  const handleNumericChange = ({ target }) => {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
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
    searchName,
    setSearchName,
    changeNameFilter,
    loading,
    setLoading,
    numberFilters,
    setNumberFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    planets,
    setPlanets,
    handleNumericChange,
    changeNumericClick,
    handleDeleteFilter,
    getPlanetsData,
  };

  useEffect(() => {
    getPlanetsData();
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
