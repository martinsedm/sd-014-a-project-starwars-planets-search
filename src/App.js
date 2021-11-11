import React from 'react';
import './App.css';
import StarsProvider from './context/StarsProvider';
import TableComponent from './components/TableComponent';
import InputComponent from './components/InputComponent';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <StarsProvider>
      <h2 className="display-1 text-center">Projeto Star Wars - Trybe</h2>
      <InputComponent />
      <NumberFilter />
      <TableComponent />
    </StarsProvider>
  );
}

export default App;
