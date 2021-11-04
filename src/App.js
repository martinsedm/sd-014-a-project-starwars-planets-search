import React from 'react';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
