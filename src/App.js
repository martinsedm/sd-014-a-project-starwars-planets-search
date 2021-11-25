import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
import Table from './components/Table';
import Columns from './components/Colums';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterByNumber />
      <Columns />
      <Table />
    </Provider>
  );
}

export default App;
