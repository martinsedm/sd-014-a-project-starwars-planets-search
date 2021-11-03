import React from 'react';
import './App.css';
import PlanetProvider from './contexts/PlanetProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetProvider>
      <Home />
    </PlanetProvider>
  );
}

export default App;
