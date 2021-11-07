import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { fetchApi, headTableArray } from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [headTable, setHeadTable] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataPlanets = await fetchApi();
      setHeadTable(headTableArray);
      setdata(dataPlanets);
    }
    getData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, headTable } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Consulta para resolução dessa linha  https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
};

export default StarWarsProvider;
