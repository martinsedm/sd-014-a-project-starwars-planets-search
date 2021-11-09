import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';
import Loading from '../components/Loading';
import Table from '../components/Table';
// import Table from '../components/Table';

function Home() {
  const { loading } = useContext(PlanetContext);
  return (
    loading ? <Loading /> : <Table />
  );
}

export default Home;
