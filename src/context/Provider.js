import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchData from '../services/fetchData';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  async function getData() {
    const results = await fetchData();
    const resultsWithoutResidentsKey = await results.map((res) => {
      delete res.residents;
      return res;
    });
    setData(resultsWithoutResidentsKey);
    setLoading(false);
  }

  function changeName(name) {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  }

  const context = { data, getData, loading, changeName, filters };

  return (
    <AppContext.Provider value={ context }>
      <div className="bg-black text-gray-500">
        { children }
      </div>
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
