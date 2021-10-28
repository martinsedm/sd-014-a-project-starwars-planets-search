import React, { useState } from 'react';
import planetContext from '.';
import fetchPlanets from '../services/opendtbAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlanets = async () => {
    setLoading(true);
    const datas = await fetchPlanets();
    setData(datas);
    setLoading(false);
  };

  return (
    <div>
      <planetContext.Provider value={ { data, loading, getPlanets } }>
        { children }
      </planetContext.Provider>
    </div>
  );
}

export default Provider;
