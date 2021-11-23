import React from 'react';
import './App.css';

import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Table />
        <Filter />
      </PlanetProvider>
    </div>
  );
}

export default App;
