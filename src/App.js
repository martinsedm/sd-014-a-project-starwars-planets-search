import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Header from './components/Header';
import FiltersForm from './components/FiltersForm';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FiltersForm />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
