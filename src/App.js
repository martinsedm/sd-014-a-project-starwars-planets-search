import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import ListPlanetPage from './pages/ListPlanetPage';

function App() {
  return (
    <PlanetProvider>
      <ListPlanetPage />
    </PlanetProvider>
  );
}

export default App;
