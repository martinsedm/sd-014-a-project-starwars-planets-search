import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Provider from './contexts/Provider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
