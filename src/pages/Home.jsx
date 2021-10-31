import React, { useEffect, useContext } from 'react';
import Table from '../components/Table';
import StarContext from '../context/context';

function Home() {
  const { getPlanets } = useContext(StarContext);

  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Projetim?</h2>
      <Table />
    </>
  );
}

export default Home;
