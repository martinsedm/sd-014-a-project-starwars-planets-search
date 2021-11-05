import './App.css';
import React from 'react';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import FilterByName from './components/filters/FilterByName';
import FilterByNumber from './components/filters/FilterByNumber';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <PlanetsSearchProvider>
      <FilterByName />
      <FilterByNumber />
      <PlanetsTable />
    </PlanetsSearchProvider>
  );
}

export default App;
