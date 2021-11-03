import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestAPI from './requestAPI';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [currentFilters, setCurrentFilters] = useState([{
    colunm: '',
    comparison: '',
    value: 0,
  }]);

  const fetchAPI = async () => {
    setIsLoading(true);
    const response = await requestAPI();
    setData(response);
    setIsLoading(false);
  };

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        isLoading,
        setIsLoading,
        fetchAPI,
        filters,
        setFilters,
        currentFilters,
        setCurrentFilters,
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
