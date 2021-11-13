import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterValue from './components/FilterValue';
import OrdenarColumns from './components/OrdenarColumns';
import PlanetasProvider from './context/PlanetasProvider';

function App() {
  return (
    <PlanetasProvider>
      <Table />
      <FilterName />
      <FilterValue />
      <OrdenarColumns />
    </PlanetasProvider>
  );
}

export default App;
