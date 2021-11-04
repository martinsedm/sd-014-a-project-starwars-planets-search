import './App.css';
import React from 'react';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import FilterByName from './components/filters/FilterByName';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <PlanetsSearchProvider>
      <FilterByName />
      <PlanetsTable />
    </PlanetsSearchProvider>
  );
}

export default App;
