import React from 'react';

import Provider from './context/Provider';
import Header from './components/Header';
import ActiveFilters from './components/ActiveFIlters';
import Table from './components/Table';

export default function App() {
  return (
    <Provider>
      <Header />
      <ActiveFilters />
      <Table />
    </Provider>
  );
}
