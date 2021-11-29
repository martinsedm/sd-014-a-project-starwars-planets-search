import React from 'react';
import './App.css';
import PlanetsProvider from './provider/PlanetsProvider';
import Table from './components/Table';
import PlanetNumberSearch from './components/PlanetNumberSearch';
// iniciando PR
function App() {
  return (
    <PlanetsProvider>
      <PlanetNumberSearch />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
