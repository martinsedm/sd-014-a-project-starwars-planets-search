import React from 'react';

import Table from './components/Table';
import Provider from './context/Provider';
import Header from './components/Header';

export default function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}
