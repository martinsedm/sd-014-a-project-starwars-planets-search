import React from 'react';
import './App.css';
import PlanetProvider from './context/planetsPovider';
import Table from './componentes/Table';
import Filter from './componentes/Filter';
import FilterNumbers from './componentes/FilterNumbers';

function App() {
  return (
    <PlanetProvider>
      <main>
        <header>
          <h1 className="title-initial">StarWalls Planets</h1>
        </header>
        <Filter />
        <div className="filters">
          <FilterNumbers />
        </div>
        <Table />
      </main>
    </PlanetProvider>
  );
}

export default App;
