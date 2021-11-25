import React from 'react';
import './App.css';

import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import ColumnFilter from './components/ColumnFilter';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Filter />
        <ColumnFilter />
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
