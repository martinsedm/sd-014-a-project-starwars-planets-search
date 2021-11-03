import './App.css';
import React from 'react';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <PlanetsSearchProvider>
      <PlanetsTable />
    </PlanetsSearchProvider>
  );
}

export default App;
