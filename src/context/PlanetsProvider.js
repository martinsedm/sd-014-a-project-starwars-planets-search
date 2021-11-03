import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  }); // ideia do estado por RODAUM

  const getPlanets = async () => {
    const data = await planetsAPI();
    const { results } = data;
    // Exclusão dos residentes - Filipão
    const resultsMapped = results.map((result) => {
      delete result.residents;
      return result;
    });
    setPlanets(resultsMapped);
    setIsLoading(false);
  };

  // Filtragem do meu senhor, Rod.
  const filterNames = () => {
    if (filters.filterByName.name) {
      return planets.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return planets;
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        getPlanets,
        isLoading,
        filters,
        setFilters,
        filterNames,
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
