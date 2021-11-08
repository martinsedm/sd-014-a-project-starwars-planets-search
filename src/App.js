import React from 'react';
import './App.css';
import FilterInput from './components/FilterInput';
import Selector from './components/Selector';
import Table from './components/Table';
import Provider from './providers/Provider';

function App() {
  return (
    <Provider>
      <FilterInput />
      <Selector />
      <Table />
    </Provider>
  );
}

export default App;
