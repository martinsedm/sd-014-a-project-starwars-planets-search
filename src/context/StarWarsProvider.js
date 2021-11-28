import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../api/getApi';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [control, setControl] = useState({
    control: 0,
  });
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [{
        column: 'population',
        comparison: 'greater',
        value: '',
      }],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });

  const data = {
    planets,
    setPlanets,
    filter,
    setFilter,
    control,
    setControl,
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getApi();
      setPlanets(response.results);
    };
    fetchApi();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
