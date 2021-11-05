import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanets from '../services/getPlanets';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: 'population', comparison: 'maior que', value: 0 }],
    // filtersUsed: [],
  });

  async function fetchPlanetsList() {
    setIsLoading(true);
    const dataPlanets = await getPlanets();
    setData(dataPlanets);
    setFilteredPlanets(dataPlanets);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPlanetsList();
  }, []);

  const setNameFilterText = ({ value }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const getNumericFilters = (value) => {
    setFilters({ ...filters, filterByNumericValues: value });
  };

  useEffect(() => {
    const filtered = data.filter(({ name }) => name.includes(filters.filterByName.name));
    setFilteredPlanets(filtered);
  }, [filters]);

  useEffect(() => {
    let filteredByNumbers = '';
    const { column, comparison, value } = filters.filterByNumericValues;
    console.log(comparison)
    if (comparison === 'maior que') {
      filteredByNumbers = data.filter((item) => (
        parseInt(item[column], 10) > parseInt(value, 10)));
    } else if ((comparison === 'menor que')) {
      filteredByNumbers = data.filter((item) => (
        parseInt(item[column], 10) < parseInt(value, 10)));
    } else {filteredByNumbers = data.filter((item) => (
      parseInt(item[column], 10) === parseInt(value, 10)));
    }
    setFilteredPlanets(filteredByNumbers);
  }, [filters]);

  const contextValue = {
    data, isLoading, filteredPlanets, setNameFilterText, getNumericFilters, filters };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetProvider;
