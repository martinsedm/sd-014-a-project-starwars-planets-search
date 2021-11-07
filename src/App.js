import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import FilterInputByName from './components/FilterInputByName';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FilterInputByName />
      <NumericFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
