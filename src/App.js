import React, { useEffect } from 'react';
import './App.css';
import Table from './component/Table';
import ProviderStar from './context/ProviderStar';
import requisitionPlanets from './services/api';

function App() {
  useEffect(() => {
    requisitionPlanets();
  }, []);
  return (
    <ProviderStar>
      <Table />
    </ProviderStar>
  );
}

export default App;
