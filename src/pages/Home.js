import React, { useContext } from 'react';
import Header from '../components/Header';
import TableRender from '../components/TableRender';
import StarsWarsContext from '../contexts/StarWarsContext';

function Home() {
  const { planetsRender } = useContext(StarsWarsContext);
  return (
    <main>
      <Header />
      { planetsRender.length > 0 && <TableRender />}
      <p>Hello world</p>
    </main>
  );
}

export default Home;
