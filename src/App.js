import React from 'react';
import './App.css';
import StarWarsProvider from './componentes/StarWarsProvider';
import Header from './pages/Header';
import Table from './pages/Table';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}
export default App;
