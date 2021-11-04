import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SWContext from './SWContext';
import getSWPlanets from '../services/swAPI';

/**
 * SWProvider - Provider for SWContext
 * @param {*} - the children components to be rendered
 * @returns {JSX.Element} - SWProvider
 * @example
 * <SWProvider>
 *   <SWContext.Consumer>
 * </SWProvider>
 */
const SWProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setName] = useState('');
  const [numericValue, setNumericValue] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });

  const filters = {
    filters: {
      filterByName: name,
      filterByNumericValues: numericValue,
      order,
    },
  };

  useEffect(() => {
    const getPlanets = async () => {
      const response = await getSWPlanets();
      setPlanets(response);
      setFilteredPlanets(response);
    };
    getPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    name,
    setName,
    numericValue,
    setNumericValue,
    order,
    setOrder,
    filters,
  };

  return (
    <SWContext.Provider value={ contextValue }>
      { children }
    </SWContext.Provider>
  );
};

/**
 * useFilters - Hook to get the filters from SWProvider
 * @returns {Object} - filters
 * @example
 * const { filters } = useFiltersInput();
 * console.log(filters);
 * // { filterByName: '', filterByNumericValues: [], order: { column: 'name', sort: 'ASC' } }
 */
export const useFilters = () => {
  const { filters } = useContext(SWContext);
  return filters;
};

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
}.isRequired;

export default SWProvider;
