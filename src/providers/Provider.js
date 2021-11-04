import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import fetchAPI from '../utils/utils';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetchAPI();

      setData(response);
    };
    fetchResults();
  }, []);

  return (
    <Context.Provider value={ { data } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Provider;
