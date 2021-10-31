import React, { useEffect, useContext } from 'react';
import Table from '../components/Table';
import StarContext from '../context/context';
import Search from '../components/Search';

function Home() {
  const { getPlanets } = useContext(StarContext);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <h2>Projeto Star Wars - Trybe</h2>
      <Search />
      <Table />
    </>
  );
}

export default Home;
