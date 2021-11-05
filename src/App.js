import React from 'react';
import Search from './pages/Search';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Search />
    </PlanetsProvider>
  );
}

export default App;
