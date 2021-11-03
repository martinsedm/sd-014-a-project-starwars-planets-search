import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import PlanetsTable from './pages/PlanetsTable';
import FilterName from './components/FilterName';

function App() {
  return (
    <PlanetProvider>
      <FilterName />
      <PlanetsTable />
    </PlanetProvider>
  );
}

export default App;
