import React from 'react';
import './App.css';
import PlanetProvider from './context/Provider';
import Main from './pages/Main';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Main />
    </PlanetProvider>
  );
}

export default App;
