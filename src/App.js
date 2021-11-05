import React from 'react';
import './App.css';

import Table from './components/Table';
import NameFilter from './components/NameFilter';
import PlanetsProvider from './context/PlanetsProvider';
import NumericalFilter from './components/NumericalFilter';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <NumericalFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
