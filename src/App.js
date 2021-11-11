import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import ProviderPlanets from './components/ProviderPlanets';
import Table from './components/Table';

function App() {
  return (
    <ProviderPlanets>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
