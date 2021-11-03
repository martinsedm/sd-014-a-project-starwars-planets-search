import React from 'react';
import Provider from './context/Provider';
import FilterName from './components/FilterName';
// import FilterNumber from './components/FilterNumber';
import Table from './components/Table';
// import Clearfilters from './components/Clearfilters';

function App() {
  return (
    <Provider>
      <FilterName />
      {/* <FilterNumber /> */}
      <Table />
      {/* <Clearfilters /> */}
    </Provider>
  );
}

export default App;
