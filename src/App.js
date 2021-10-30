import React from 'react';
import TableProvider from './context/TableProvider';
import Table from './Pages/Table';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
