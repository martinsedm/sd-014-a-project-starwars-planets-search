import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';
import './App.css';
import InputSearch from './components/InputSearch';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <PlanetsProvider>
      <NumericFilter />
      <InputSearch />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
