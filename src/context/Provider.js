import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import ApiStarWars from '../services/Api';
import MyContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState({
    filters:
    {
      filterByName: {
        name: '',
      },
    },
  });

  const apiRequest = async () => {
    const request = await ApiStarWars();
    setData(request);
  };

  useEffect(() => {
    apiRequest();
  }, []);

  const context = { data, setData, ...name, setName };
  console.log(data);

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: Proptypes.object,
}.isRequired;
