import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './pages/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <PlanetsProvider>
      <FilterName />
      <FilterNumber />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
