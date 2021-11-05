import React, { useState, useEffect } from 'react';
import Allplanets from '../services/fetchPlanets';

import Allcontext from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');

  const updateSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const getPlanets = async () => {
    const planets = await Allplanets();
    setData(planets);
  };

  const fillterSearch = () => {
    if (search !== '') {
      const newArr = data.filter((object) => (object.name.includes(search)));
      console.log(newArr.length);
      if (newArr.length === 0) {
        getPlanets();
      }
      setData(newArr);
    } else {
      getPlanets();
    }
  };

  useEffect(() => { getPlanets(); }, []);

  useEffect(() => {
    fillterSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const stateGlobal = {
    data,
    updateSearch,
    filters: {
      filterByName: {
        search,
      },
    },
  };

  return (
    <main>
      <Allcontext.Provider value={ stateGlobal }>{ children }</Allcontext.Provider>
    </main>
  );
};

export default Provider;
