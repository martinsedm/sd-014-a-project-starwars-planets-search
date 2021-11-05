import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByStats from './components/FIlterByStats';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <h1>Projeto Star Wars - Trybe</h1>
      <FilterByName />
      <FilterByStats />
      <Table />
    </MyProvider>
  );
}

export default App;
