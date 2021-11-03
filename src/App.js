import React, { useEffect, useState } from 'react';
//  import Provider from './context/Provider';
//  import Context from './context/Context';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  //  const [filteredData, setData] = useState([]);

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
    <Table data={ data } />
  );
}

export default App;
