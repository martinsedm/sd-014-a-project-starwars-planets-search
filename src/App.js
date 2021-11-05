import React from 'react';
import './App.css';
import PlanetProvider from './context/Provider';
import Home from './pages/Main';

function App() {
  return (
    <PlanetProvider>
      <Home />
    </PlanetProvider>
  );
}

export default App;
