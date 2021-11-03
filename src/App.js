import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './pages/Table';
import Filters from './pages/Filters';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
