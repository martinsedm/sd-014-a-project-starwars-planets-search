import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './contexts/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
