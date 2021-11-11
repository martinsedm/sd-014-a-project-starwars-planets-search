import React from 'react';
import Home from './pages/Home';

import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
