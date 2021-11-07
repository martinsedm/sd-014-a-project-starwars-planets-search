import React from 'react';
import PlanetsFilter from './components/PlanetsFilter';
import Search from './components/Search';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Search />
      <PlanetsFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
