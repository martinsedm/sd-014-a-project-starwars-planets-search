import React from 'react';
import Table from './Components/Table';
import FilterByName from './Components/FilterByName';
import FilterByValues from './Components/FilterByValues';
import Provider from './Context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByValues />
      <Table />
    </Provider>
  );
}

export default App;
