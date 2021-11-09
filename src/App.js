import React from 'react';
import './App.css';

import Header from './components/Header';
import Filters from './components/Filters';
import Table from './components/Table ';

import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
