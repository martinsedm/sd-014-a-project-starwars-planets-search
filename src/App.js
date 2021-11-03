import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import PlanetsTable from './pages/PlanetsTable';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <PlanetProvider>
      <FilterName />
      <FilterNumber />
      <PlanetsTable />
    </PlanetProvider>
  );
}

export default App;
