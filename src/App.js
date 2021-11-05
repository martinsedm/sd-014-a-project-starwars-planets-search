import React from 'react';
import InputFilter from './components/InputFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import ProviderPlanets from './Context/ProviderPlanets';

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
