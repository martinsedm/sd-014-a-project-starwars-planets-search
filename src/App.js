import React from 'react';
import Table from './Components/Table';
import Header from './Components/Header';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Table />

    </Provider>
  );
}

export default App;
