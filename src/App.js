import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './components/Table';
import Title from './components/Title';

function App() {
  return (
    <PlanetsProvider>
      <Title />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
