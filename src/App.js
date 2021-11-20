import React, { useEffect } from 'react';
import './App.css';
import Filters from './component/Filters';
import Table from './component/Table';
import ProviderStar from './context/ProviderStar';
import requisitionPlanets from './services/api';

function App() {
  useEffect(() => {
    requisitionPlanets();
  }, []);
  return (
    <ProviderStar>
      <Filters />
      <Table />
    </ProviderStar>
  );
}

export default App;
