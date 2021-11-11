import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

function Home() {
  const { fetchData, loading } = useContext(PlanetsContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
      </header>
      { loading ? <h1>Loading...</h1> : (
        <div>
          <SearchBar />
          <Table />
        </div>
      )}
    </div>
  );
}

export default Home;
