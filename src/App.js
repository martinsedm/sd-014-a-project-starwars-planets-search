import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterTable from './components/FilterTable';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterTable />
      <Table />
    </Provider>
  );
}

export default App;
