import React from 'react';

import Home from './pages/Home';
import PlanetsSearchProvider from './context/planetsSearchProvider';
import './App.css';

function App() {
  return (
    <PlanetsSearchProvider>
      <div className="app">
        <Home />
      </div>
    </PlanetsSearchProvider>
  );
}

export default App;
