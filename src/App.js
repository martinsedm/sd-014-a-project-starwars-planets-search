import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Home />
    </PlanetProvider>
  );
}

export default App;
