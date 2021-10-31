import React, { useContext, useEffect } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import { Header, Table, SearchInput, FiltersBar } from '../components';

function Home() {
  const { data, loading, fetchData } = useContext(planetSearchContext);

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? <h1 className="loading">Carregando...</h1> : (
    <>
      <Header />
      <SearchInput />
      <FiltersBar />
      <Table data={ data } />

    </>
  );
}

export default Home;
