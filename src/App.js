import React from 'react';

import './App.css';
import Home from './components/Home';
import PlanetsProvider from './context/PlanetsProvider';

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
