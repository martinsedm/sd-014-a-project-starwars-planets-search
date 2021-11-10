import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';
import Loading from '../components/Loading';

import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

function Home() {
  const { loading } = useContext(PlanetContext);
  const title = 'Projeto Star Wars - Trybe';
  return (
    <div>
      <header>
        <h1>{ title }</h1>
        <SearchBar />
      </header>
      { loading ? <Loading /> : <Table /> }
    </div>
  );
}

export default Home;
