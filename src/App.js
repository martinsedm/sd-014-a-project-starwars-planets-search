import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/PlanetsTable';
import FilterPlanetsByName from './components/FilterPlanetsByName';
import FilterPlanetsByNumericValues from './components/FilterPlanetsByNumericValues';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <FilterPlanetsByName />
        <FilterPlanetsByNumericValues />
        <PlanetsTable />
      </main>
    </PlanetsProvider>
  );
}

export default App;
