import React from 'react';
import './App.css';
import StarWarsProvider from './componentes/StarWarsProvider';
import Table from './pages/Table';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}
export default App;
