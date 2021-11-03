import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();

    setData(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    setFilter({ ...filter, filters: { filterByName: { name } } });
  }, [name]);

  return (
    <PlanetsContext.Provider
      value={ {
        loading,
        data,
        name,
        filter,
        setName,
        fetchData } }
    >
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
