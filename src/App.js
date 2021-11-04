import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './Table';
import FilterField from './FilterField';

function App() {
  return (
    <PlanetsProvider>
      <FilterField />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
