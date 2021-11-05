import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import FilterInputs from './components/FilterInputs';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FilterInputs />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
