import React from 'react';
import './App.css';
import InputFilter from './Components/InputFilter';
import Table from './Components/Table';
import ProviderPlanets from './Context/ProviderPlanet';

function App() {
  return (
    <ProviderPlanets>
      <InputFilter />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
