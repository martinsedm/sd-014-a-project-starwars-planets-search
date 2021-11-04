import React, { useState, useEffect } from 'react';
import Allplanets from '../services/fetchPlanets';

import Allcontext from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const planets = await Allplanets();
    setData(planets);
  };

  useEffect(() => { getPlanets(); }, []);

  const stateGlobal = {
    data,
  };

  return (
    <main>
      <Allcontext.Provider value={ stateGlobal }>{ children }</Allcontext.Provider>
    </main>
  );
};

export default Provider;
