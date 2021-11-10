import React from 'react';
import './App.css';
import StarsProvider from './context/StarsProvider';
import TableComponent from './components/TableComponent';
import InputComponent from './components/InputComponent';
import NumberFilter from './components/NumberFilter';
import './bootstrap-5.1.2-dist/css/bootstrap.min.css';

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
