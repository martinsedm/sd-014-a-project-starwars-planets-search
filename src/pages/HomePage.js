import React, { useContext } from 'react';
import Table from '../components/Table';
import MyContext from '../context';

export default function HomePage() {
  const { results } = useContext(MyContext);
  console.log(results);
  return (
    <Table />
  );
}
