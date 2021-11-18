import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/PlanetsTable';
import FilterPlanetsByName from './components/FilterPlanetsByName';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <FilterPlanetsByName />
        <PlanetsTable />
      </main>
    </PlanetsProvider>
  );
}

export default App;
