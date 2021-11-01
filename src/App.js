import React from 'react';
import './App.css';

import Provider from './context/Provider';
import Table from './components/Table';
import NameFilter from './components/NameFilter';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe</h1>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
