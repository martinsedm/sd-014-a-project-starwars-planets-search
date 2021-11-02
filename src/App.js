import React from 'react';
import './App.css';
import PlanetProvider from './context/planetsPovider';
import Table from './componentes/Table';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
