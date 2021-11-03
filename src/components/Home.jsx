import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import Header from './Header';
import Table from './Table';

function Home() {
  const { data, setData, setFilteredData } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      const objectConverted = Object.values(json.results);
      setData(objectConverted);
      setFilteredData(objectConverted);
    }
    fetchData();
  }, []);

  if (data.length <= 0) return <h1>Loading ...</h1>;

  return (
    <>
      <Header />
      <br />
      <br />
      <Table />
    </>
  );
}

export default Home;
