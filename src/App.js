import React from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import PlanetsProvider from './context/PlanetsProvider';
import RenderFilters from './components/RenderFilters';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Planets</h1>
      <Filters />
      <RenderFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
