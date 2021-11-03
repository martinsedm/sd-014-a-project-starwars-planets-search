import React, { useContext } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import StarsWarsContext from '../contexts/StarWarsContext';

function Home() {
  const { planetsRender } = useContext(StarsWarsContext);
  return (
    <main>
      <Header />
      { planetsRender.length > 0 && <Table />}
      <p>Hello world</p>
    </main>
  );
}

export default Home;
