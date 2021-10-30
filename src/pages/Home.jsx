import React, { useContext, useEffect } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import { Header, Table, SearchInput } from '../components';

function Home() {
  const { data, loading, fetchData } = useContext(planetSearchContext);

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? <h1 className="loading">Carregando...</h1> : (
    <>
      <Header />
      <SearchInput />
      <Table data={ data } />

    </>
  );
}

export default Home;
