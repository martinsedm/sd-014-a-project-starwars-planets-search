import React from 'react';
import './App.css';
import Filter from './components/Filter';
import ProviderPlanets from './components/ProviderPlanets';
import Table from './components/Table';

function App() {
  return (
    <ProviderPlanets>
      <Filter />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
