import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchData from '../services/fetchData';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const results = await fetchData();
    const resultsWithoutResidentsKey = await results.map((res) => {
      delete res.residents;
      return res;
    });
    setData(resultsWithoutResidentsKey);
    setLoading(false);
  }

  const context = { data, getData, loading };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
