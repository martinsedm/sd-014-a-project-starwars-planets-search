import React from 'react';
import './App.css';
import PlanetProvider from './context/Provider';
import Main from './pages/Main';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <PlanetProvider>
      <NumericFilter />
      <Filter />
      <Main />
    </PlanetProvider>
  );
}

export default App;
