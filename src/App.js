import React from 'react';
import Table from './Components/Table';
import Header from './Components/Header';
import Selects from './Components/Selects';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Selects />
      <Table />
    </Provider>
  );
}

export default App;
