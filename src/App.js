import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

// filipão M O N S T R Ã O deu a call do Provider no APP (MAITÊ MENTIU PARA NÓS);
function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
