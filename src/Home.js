import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import Table from './components/Table';

export default function Home() {
  const { isLoading } = useContext(DataContext);

  return (
    isLoading
      ? <h1>Loading...</h1> : <Table />
  );
}
