import React from 'react';
import './App.css';
import FilterInput from './components/FilterInput';
import Table from './components/Table';
import Provider from './providers/Provider';

function App() {
  return (
    <Provider>
      <FilterInput />
      <Table />
    </Provider>
  );
}

export default App;
