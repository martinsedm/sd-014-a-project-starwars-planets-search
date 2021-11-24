import React from 'react';
import './App.css';
import Table from './components/Table';
import StartWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StartWarsPlanetsProvider>
      <Table />
    </StartWarsPlanetsProvider>
  );
}

export default App;
