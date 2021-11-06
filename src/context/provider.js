import React, { useState, useEffect } from 'react';
import Allplanets from '../services/fetchPlanets';

import Allcontext from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getPlanets = async () => {
    const planets = await Allplanets();
    setData(planets);
  };

  useEffect(() => { getPlanets(); }, []);

  const updateSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const fillterSearch = () => {
    if (search !== '') {
      const newArr = data.filter((object) => (object.name.includes(search)));

      if (newArr.length === 0) {
        getPlanets();
      }
      setData(newArr);
    } else {
      getPlanets();
    }
  };

  useEffect(() => {
    fillterSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const filterValues = (Ncolum, Ncomparison, valueNumber) => {
    if (Ncolum) {
      if (Ncomparison === 'maior que') {
        const maiorQ = data.filter((item) => Number(item[Ncolum]) > Number(valueNumber));
        setData(maiorQ);
      } if (Ncomparison === 'menor que') {
        const menorQ = data.filter((item) => Number(item[Ncolum]) < Number(valueNumber));
        setData(menorQ);
      } else if (Ncomparison === 'igual a') {
        const iguaA = data.filter((item) => Number(item[Ncolum]) === Number(valueNumber));
        setData(iguaA);
      }
    }
  };

  const stateGlobal = {
    data,
    filterValues,
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
