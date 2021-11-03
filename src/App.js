import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import PlanetsTable from './pages/PlanetsTable';

function App() {
  return (
    <PlanetProvider>
      <PlanetsTable />
    </PlanetProvider>
  );
}

export default App;
