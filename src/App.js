import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
import Table from './components/Table';
import FilterNumber from './components/FilterNumber';
import Clearfilters from './components/Clearfilters';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumber />
      <Clearfilters />
      <Table />
    </Provider>
  );
}

export default App;
