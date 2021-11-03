import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './pages/Table';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import FilterSave from './components/FilterSave';

function App() {
  return (
    <PlanetsProvider>
      <FilterName />
      <FilterNumber />
      <FilterSave />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
