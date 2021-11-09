import React from 'react';
import './App.css';
import InputFilter from './Components/InputFilter';
import NumericFilter from './Components/NumericFilter';
import Table from './Components/Table';
import ProviderPlanets from './Context/ProviderPlanet';

function App() {
  return (
    <ProviderPlanets>
      <InputFilter />
      <NumericFilter />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
