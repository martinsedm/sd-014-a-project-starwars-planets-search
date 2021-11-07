import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetApi from '../services/fetchApi';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const filter = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };
  const [filters, setFilters] = useState(filter);

  useEffect(() => {
    const fetchApi = async () => {
      const planetsApi = await fetchPlanetApi();
      setPlanets(planetsApi.results);
    };
    fetchApi();
  }, []);

  const filterPlanets = async (name) => {
    if (name) {
      const filterPlanet = planets.filter(
        (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
      );
      setPlanets(filterPlanet);
    } else {
      const api = await fetchPlanetApi();
      setPlanets(api.results);
    }
  };

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filterPlanets,
    column,
    setColumn,
    value,
    setValue,
    comparison,
    setComparison,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
