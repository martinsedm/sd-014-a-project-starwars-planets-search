import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterValue from './components/FilterValue';
import PlanetasProvider from './context/PlanetasProvider';

function App() {
  return (
    <PlanetasProvider>
      <Table />
      <FilterName />
      <FilterValue />
    </PlanetasProvider>
  );
}

export default App;
