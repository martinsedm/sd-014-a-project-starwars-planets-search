import React from 'react';
import './App.css';
import Table from './Components/Table';
import ProviderContext from './ProviderContext';

function App() {
  return (
    <ProviderContext>
      <Table />
    </ProviderContext>
  );
}

export default App;
