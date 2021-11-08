/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import CreatedFilters from './components/CreatedFilters';
import Filter from './components/Filter';
import Table from './components/Table';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <Filter />
      <CreatedFilters />
      <Table />
    </MainProvider>
  );
}

export default App;
