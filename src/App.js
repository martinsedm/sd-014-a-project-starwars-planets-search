import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/PlanetsTable';
import FilterPlanetsByName from './components/FilterPlanetsByName';
import FilterPlanetsByNumericValues from './components/FilterPlanetsByNumericValues';
import SortPlanets from './components/SortPlanets';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <FilterPlanetsByName />
        <FilterPlanetsByNumericValues />
        <SortPlanets />
        <PlanetsTable />
      </main>
    </PlanetsProvider>
  );
}

export default App;
