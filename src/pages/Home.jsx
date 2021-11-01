import React, { useEffect, useContext } from 'react';
import Table from '../components/Table';
import StarContext from '../context/context';
import Search from '../components/Search';
import Filter from '../components/Filter';

function Home() {
  const { getPlanets } = useContext(StarContext);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h2>Projeto Star Wars - Trybe</h2>
      <Search />
      <Filter />
      <Table />
    </main>
  );
}

export default Home;
