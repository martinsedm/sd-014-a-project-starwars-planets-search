import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import Table from './Table';

function Home() {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      const objectConverted = Object.values(json.results);
      setData(objectConverted);
    }
    fetchData();
  }, []);

  if (data.length <= 0) return <h1>Loading ...</h1>;

  return (
    <Table />
  );
}

export default Home;
