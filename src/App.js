import React from 'react';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <PlanetProvider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
