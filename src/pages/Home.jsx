import React, { useEffect, useContext } from 'react';
import getPlanetsAPI from '../API/starwarsPlanetAPI';
import Table from '../components/Table';
import MainContext from '../context/MainContext';

export default function Home() {
  const { setplanets, setKeys } = useContext(MainContext);

  useEffect(async () => {
    const { results } = await getPlanetsAPI();
    const keys = Object.keys(results[0]);
    setplanets(results);
    setKeys(keys);
  }, []);

  return (
    <div>
      <header>
        Projeto Star Wars
      </header>
      <Table />
    </div>
  );
}
