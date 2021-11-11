import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

function Home() {
  const { loading } = useContext(PlanetContext);

  return (
    <div>
      <header>
        <h1>Projeto Star Wars - Trybe</h1>
        <SearchBar />
      </header>
      <div>
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </div>
      { loading ? <h1>Loading..</h1> : <Table /> }
    </div>
  );
}

export default Home;
