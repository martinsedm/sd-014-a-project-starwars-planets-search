import React from 'react';
import './App.css';
import './css/loading.css';
import './css/extra.css';
import PlanetsProvider from './contextAPI/PlanetsProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
