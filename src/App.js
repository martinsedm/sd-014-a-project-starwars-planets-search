import React from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import TableProvider from './services/TableProvider';

function App() {
  return (
    <>
      <span>Hello, App!</span>
      <TableProvider>
        <Form />
        <Table />

      </TableProvider>
    </>
  );
}

export default App;
