import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/planetsAPI';
import { filterByName, filterByNumericValues } from '../services/filterPlanets';

function PlanetsProvider({ children }) {
  const columFilter = document.getElementById('colum-filter');

  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [filterColum, setfilterColum] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('menor que');
  const [valueFilter, setValueFilter] = useState('');

  const callGetPlanets = async () => {
    const requestPlanets = await getPlanets();
    setPlanets(requestPlanets);
    setLoading(false);
  };

  const onChangeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const onChangeColumFilter = ({ target }) => {
    setfilterColum(target.value);
  };

  const onChangeComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const onChangeValueFilter = ({ target }) => {
    setValueFilter(target.value);
  };

  useEffect(() => {
    const result = filterByName(planets, search);
    setFilteredPlanets(result);
  }, [planets, search]);

  const onClickFilter = () => {
    const result = filterByNumericValues(
      planets, filterColum, comparisonFilter, valueFilter,
    );
    columFilter.childNodes.forEach((child) => {
      if (child.value === filterColum) child.remove();
    });
    setFilteredPlanets(result);
    // array, colum, comparison, value
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        filteredPlanets,
        callGetPlanets,
        loading,
        onChangeSearch,
        search,
        onChangeColumFilter,
        filterColum,
        onChangeComparisonFilter,
        comparisonFilter,
        onChangeValueFilter,
        valueFilter,
        onClickFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
