import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>

    </div>
  );
}

export default Home;
