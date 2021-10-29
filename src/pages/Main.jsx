import React from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';

import { useData } from '../context/DataContext';

export default function Main() {
  const { apiDataRaw } = useData();
  if (!apiDataRaw) return null;
  return (
    <>
      <Filter />
      <Table />
    </>
  );
}
