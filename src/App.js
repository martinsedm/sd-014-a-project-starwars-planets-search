import React from 'react';
import './App.css';
import Table from './Components/Table';
import APIProvider from './Context/APIProvider';

function App() {
  return (
    <APIProvider>
      <Table />
    </APIProvider>
  );
}

export default App;
