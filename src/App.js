import React from 'react';

import Home from './components/Home';
import PlanetsProvider from './context/PlanetsProvider';

import './App.css';

function App() {
  return (
    <div className="App">
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
    </div>
  );
}

export default App;
