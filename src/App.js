import React from 'react';
import Table from './components/Table';
import ProviderPlanets from './Context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <Table />
    </ProviderPlanets>
  );
}

export default App;
