import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import HomePage from './pages/HomePage';

function App() {
  return (
    <PlanetsProvider>
      <HomePage />
    </PlanetsProvider>
  );
}

export default App;
