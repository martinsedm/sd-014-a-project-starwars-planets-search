import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import DataContextProvider from './context/DataContext';
// import './App.css';

export default function App() {
  return (
    <DataContextProvider>
      <Filter />
      <Table />
    </DataContextProvider>
  );
}
