import React from 'react';
import './App.css';
import Table from './Componentes/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!!!</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
