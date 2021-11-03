import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetContext from '.';
import fetchPlanets from '../services/opendtbAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      order: {
        column: 'name',
        sort: 'ASC',
      },
      filterByNumericValues: [],
    },
  });

  const getPlanets = async () => {
    setLoading(true);
    const datas = await fetchPlanets();
    setData(datas);
    setLoading(false);
  };

  const value = {
    data,
    loading,
    getPlanets,
    filter,
    setFilter,
  };

  return (
    <div>
      <planetContext.Provider value={ value }>
        { children }
      </planetContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
