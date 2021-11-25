import React from 'react';
import './App.css';
import PlanetsProvider from './provider/PlanetsProvider';
import Table from './components/Table';
// iniciando PR
function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
