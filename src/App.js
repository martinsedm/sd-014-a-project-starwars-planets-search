import React from 'react';
import Table from './components/Table';
import DataContextProvider from './context/DataContext';
import './App.css';

export default function App() {
  return (
    <DataContextProvider>
      <Table />
    </DataContextProvider>
  );
}
