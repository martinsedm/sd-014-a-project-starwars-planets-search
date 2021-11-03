import React from 'react';
import './App.css';
import Filtro from './Components/Filtro';
import Table from './Components/Table';
import APIProvider from './Context/APIProvider';

function App() {
  return (
    <APIProvider>
      <Filtro />
      <Table />
    </APIProvider>
  );
}

export default App;
