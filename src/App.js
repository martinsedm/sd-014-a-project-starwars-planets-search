import React from 'react';
import Table from './Components/Table';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
