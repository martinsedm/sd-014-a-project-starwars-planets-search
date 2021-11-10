import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './contexAPI/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, Appss!</span>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
