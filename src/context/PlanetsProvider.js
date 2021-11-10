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
  const [name, setName] = useState('');
  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

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

  const changeNameFilter = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
    setName(value);
  };

  const filteredPlanets = () => planets.filter(
    (planet) => planet.name.toLowerCase().includes(filter.filterByName.name),
  );

  const valueContext = {
    planets,
    loading,
    filter,
    name,
    changeNameFilter,
    filteredPlanets,
    numericFilter,
    setNumericFilter,
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
