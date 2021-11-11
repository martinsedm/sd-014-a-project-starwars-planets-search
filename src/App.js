import React from 'react';
import './App.css';
import FilterNames from './components/filterName';
import NumericFilter from './components/filterNumber';
import Table from './components/table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <FilterNames />
      <NumericFilter />
      <Table />
    </Provider>
  );
}

export default App;
