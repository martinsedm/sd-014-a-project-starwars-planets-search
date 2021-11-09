import React from 'react';
import './App.css';
import Table from './Components/Table';
import ProviderPlanets from './Context/ProviderPlanet';

function App() {
  return (
    <ProviderPlanets>
      <Table />
    </ProviderPlanets>
  );
}

export default App;
