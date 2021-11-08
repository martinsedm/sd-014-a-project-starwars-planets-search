import React from 'react';
import './App.css';
import Table from './pages/Table';
import TableProvider from './services/TableProvider';

function App() {
  return (
    <>
      <span>Hello, App!</span>
      <TableProvider>
        <Table />

      </TableProvider>
    </>
  );
}

export default App;
