import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Provider from './contexts/Provider';
import Header from './components/Header';
import NumberFilters from './components/NumberFilters';
import Sort from './components/Sort';

function App() {
  return (
    <Provider>
      <Header />
      <NumberFilters />
      <SearchBar />
      <Sort />
      <Table />
    </Provider>
  );
}

export default App;
