import React from 'react';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Search />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
