import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Filters from './components/Filters';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
