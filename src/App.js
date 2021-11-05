import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';
import './App.css';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <PlanetsProvider>
      <InputSearch />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
