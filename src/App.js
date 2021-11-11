import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetasProvider from './context/PlanetasProvider';

function App() {
  return (
    <PlanetasProvider>
      <Table />
    </PlanetasProvider>
  );
}

export default App;
