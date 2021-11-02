import React from 'react';
import './App.css';

import Table from './components/Table';
import NameFilter from './components/NameFilter';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <NameFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
