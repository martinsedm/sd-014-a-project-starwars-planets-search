import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './contextPages';
import fetchApi from './apiService';

function TableProvider({ children }) {
  const [data, setData] = useState([{}]);
  const [dataTest, setDataTest] = useState([]);
  const [filters, setFilters] = useState({
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
  });
  const [loading, setLoading] = useState(false);
  const [filterPlanets, setFilterPlanets] = useState([]);

  useEffect(() => {
    setLoading(true);
    const receiveApi = async () => {
      const response = await fetchApi();
      setData(response.results);
      setDataTest(response.results);
      setFilterPlanets(response.results);
      setLoading(false);
    };
    receiveApi();
  }, []);

  return (

    <TableContext.Provider
      value={ {
        data,
        setData,
        setFilters,
        filterPlanets,
        setFilterPlanets,
        filters,
        dataTest,
        loading,
      } }
    >
      {children}
    </TableContext.Provider>

  );
}

TableProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TableProvider;
