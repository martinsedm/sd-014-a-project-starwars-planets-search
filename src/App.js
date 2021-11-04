import React from 'react';
import Table from './Components/Table';
import FilterByName from './Components/FilterByName';
import Provider from './Context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <Table />
    </Provider>
  );
}

export default App;
