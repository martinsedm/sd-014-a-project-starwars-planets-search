import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <main>
      <PlanetProvider>
        <NameFilter />
        <NumericFilter />
        <Table />
      </PlanetProvider>
    </main>
  );
}

export default App;
