import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const INITIAL_FILTERS_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [unmodifiedData, setUnmodifiedData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);

  const handleName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const handleNumericValues = (event, numericValues) => {
    event.preventDefault();
    const { column, comparison, value } = numericValues;
    setFilters({ ...filters,
      filterByNumericValues:
      [...filters.filterByNumericValues, { column, comparison, value }] });
  };

  const setPlanetsOnState = async () => {
    const planets = await getPlanets();
    setData(planets);
    setUnmodifiedData(planets);
    setHeaders(Object.keys(planets[0]));
  };

  useEffect(() => { setPlanetsOnState(); }, []);
  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filteredPlanets = unmodifiedData.filter((planet) => (
      planet.name.includes((name))));
    setData(filteredPlanets);
  }, [filters, unmodifiedData]);

  return (
    <PlanetsContext.Provider
      value={
        { data,
          headers,
          filters,
          handleName,
          handleNumericValues }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
