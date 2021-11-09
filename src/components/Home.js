import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const { api, apiFetch } = useContext(PlanetContext);

  useEffect(() => {
    apiFetch();
  }, []);

  console.log(api);
  return (
    <span>TAINDO!</span>
  );
}

export default Home;
