import React, { useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import { Header, Table, SearchInput, FiltersBar } from '../components';

function Home() {
  const { loading } = useContext(planetSearchContext);

  return loading ? <h1 className="loading">Carregando...</h1> : (
    <>
      <Header />
      <SearchInput />
      <FiltersBar />
      <Table />

    </>
  );
}

export default Home;
