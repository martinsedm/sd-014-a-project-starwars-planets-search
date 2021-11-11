import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';
import PlanetasProvider from './context/PlanetasProvider';

function App() {
  return (
    <PlanetasProvider>
      <Table />
      <FilterName />
    </PlanetasProvider>
  );
}

export default App;
