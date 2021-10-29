import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planets</h1>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
