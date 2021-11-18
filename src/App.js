import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
