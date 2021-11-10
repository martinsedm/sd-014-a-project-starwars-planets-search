import React from 'react';
import './App.css';
import FilterByName from './Componentes/FilterByName';
import NumericFilter from './Componentes/NumericFilter';
import Table from './Componentes/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!!!</span>
      <FilterByName />
      <NumericFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
