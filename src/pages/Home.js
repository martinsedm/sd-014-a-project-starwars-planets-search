import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import Loading from '../components/Loading';
import Table from '../components/Table';

function Home() {
  const { fetchData, isLoading } = useContext(SWContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    isLoading ? <Loading />
      : (
        <Table />
      ));
}

export default Home;
