import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import fetchAPI from '../utils/utils';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const value = {
    data,
    setData,
    filter,
    setFilter,
  };

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetchAPI();

      setData(response);
    };
    fetchResults();
  }, []);

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
