import React from 'react';
import TableProvider from './context/TableProvider';
import Search from './components/Seach';
import Table from './Pages/Table';

function App() {
  return (
    <TableProvider>
      <Search />
      <Table />
    </TableProvider>
  );
}

export default App;
