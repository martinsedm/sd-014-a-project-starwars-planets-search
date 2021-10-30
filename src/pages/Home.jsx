import React, { useContext, useEffect } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import { Header, Table } from '../components';

function Home() {
  const { data, loading, fetchData } = useContext(planetSearchContext);

  useEffect(() => {
    console.log('montou');
    fetchData();
  }, []);

  return (
    <>
      <Header />
      { loading ? <h1>Carregando...</h1> : <Table data={ data } />}

    </>
  );
}

export default Home;
