import React from 'react';
import './App.css';
import FilterNames from './components/filterName';
import Table from './components/table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <FilterNames />
      <Table />
    </Provider>
  );
}

export default App;
