import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './contexAPI/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
