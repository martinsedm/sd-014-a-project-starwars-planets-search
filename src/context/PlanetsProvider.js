import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPlanets } from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
  });
  const [searchName, setSearchName] = useState('');
  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [],
  });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const { filterByNumericValues } = numericFilter;

  const getPlanetsData = async () => {
    const { results } = await getPlanets();
    const resultsMapped = results.map((result) => {
      delete result.residents;
      return result;
    });
    setPlanets(resultsMapped);
    setLoading(false);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  useEffect(() => {
  }, [numericFilter]);

  const changeNameFilter = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: target.value,
      },
    });
    setSearchName(target.value);
  };

  const changeNumericClick = () => {
    setNumericFilter({
      ...numericFilter,
      filterByNumericValues: [...numericFilter.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  const handleNumericChange = ({ target }) => {
    if (target.id === 'setColumn') setColumn(target.value);
    if (target.id === 'setComparison') setComparison(target.value);
    if (target.id === 'setValue') setValue(target.value);
  };

  const handleDeleteFilter = (filtered) => {
    const newFilter = filterByNumericValues.filter((item) => item.column !== filtered);
    setNumericFilter({ ...numericFilter, filterByNumericValues: newFilter });
  };

  const valueContext = {
    planets,
    loading,
    filter,
    searchName,
    changeNameFilter,
    numericFilter,
    setNumericFilter,
    changeNumericClick,
    handleNumericChange,
    column,
    getPlanetsData,
    handleDeleteFilter,
  };

  return (
    <PlanetsContext.Provider value={ valueContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
