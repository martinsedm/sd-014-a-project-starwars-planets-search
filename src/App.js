import React from 'react';
import './App.css';
import PlanetProvider from './context/planetsPovider';
import Table from './componentes/Table';
import Filter from './componentes/Filter';
import FilterNumbers from './componentes/FilterNumbers';

function App() {
  return (
    <PlanetProvider>
      <h1>StarWalls Planets</h1>
      <Filter />
      <FilterNumbers />
      <Table />
    </PlanetProvider>
  );
}

export default App;
