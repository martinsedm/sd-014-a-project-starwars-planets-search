import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    async function getData() {
      const dataPlanets = await fetchApi();
      setdata(dataPlanets);
    }
    getData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, filter, setFilter } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Consulta para resolução dessa linha  https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
};

export default StarWarsProvider;
