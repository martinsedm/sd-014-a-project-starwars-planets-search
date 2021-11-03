import React, { useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';

const HomePage = () => {
  const { loading, fetchData } = useContext(PlanetsContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      { loading ? <h1>Carregando...</h1> : <Table /> }
    </main>
  );
};

export default HomePage;
