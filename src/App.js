import React from 'react';
import './App.css';
import FilterByName from './Componentes/FilterByName';
import Table from './Componentes/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!!!</span>
      <Table />
      <FilterByName />
    </PlanetsProvider>
  );
}

export default App;
