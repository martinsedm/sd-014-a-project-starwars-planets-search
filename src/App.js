import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './components/Table';
import Title from './components/Title';
import Input from './components/Input';

function App() {
  return (
    <PlanetsProvider>
      <Title />
      <Input />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
