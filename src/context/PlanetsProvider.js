import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetList from '../services/Api';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    fetchPlanetList(setPlanets);
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleSelectColumn = ({ target: { value } }) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filterByNumericValues[0], column: value }] });
  };

  const handleSelectComparison = ({ target: { value } }) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filterByNumericValues[0], comparison: value }] });
  };

  const handleChangeNumber = ({ target: { value } }) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [{ ...filterByNumericValues[0],
        value }] });
  };

  const handleClick = () => {
    console.log('ola');
  };

  const context = {
    planets,
    filters,
    handleChange,
    handleSelectColumn,
    handleSelectComparison,
    handleChangeNumber,
    handleClick,
  };
  return (
    <main>
      <PlanetsContext.Provider
        value={ context }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
