import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import FilterInput from './components/FilterInput';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <FilterInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
