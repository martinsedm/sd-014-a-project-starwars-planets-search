import React from 'react';
import Table from './Table';
import FilterByText from './FilterByText';
import FilterByNumber from './FilterByNumber';
import { useDataContext } from '../context/DataContext';

// import './App.css';

export default function App() {
  const { apiData } = useDataContext();
  if (!apiData) return ('Loading...');
  return (
    <>
      <Table />
      <FilterByText />
      <FilterByNumber />
    </>
  );
}
