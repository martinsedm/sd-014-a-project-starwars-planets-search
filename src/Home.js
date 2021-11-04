import React, { useContext, useEffect } from 'react';
import DataContext from './context/DataContext';
import Table from './components/Table';

export default function Home() {
  const { FetchApi, isLoading } = useContext(DataContext);
  useEffect(() => {
    FetchApi();
  }, []);

  return (
    isLoading ? <h1>Loading...</h1> : <Table />
  );
}
