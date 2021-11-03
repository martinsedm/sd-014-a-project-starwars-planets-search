import React from 'react';
import './App.css';
import Table from './Components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <PlanetsProvider>
      <SearchForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
