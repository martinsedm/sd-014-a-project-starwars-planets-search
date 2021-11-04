import React from 'react';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <InputFilter />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
