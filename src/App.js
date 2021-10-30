import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './context/Provider';
import FilterInput from './components/FilterInput';

function App() {
  return (
    <Provider>
      <h1>Projeto Star Wars - Trybe!</h1>
      <FilterInput />
      <Table />
    </Provider>
  );
}

export default App;
