import React from 'react';
import TableProvider from './context/TableProvider';
import Search from './components/Search';
import SearchNumber from './components/SearchNumber';
import Table from './Pages/Table';

function App() {
  return (
    <TableProvider>
      <Search />
      <SearchNumber />
      <Table />
    </TableProvider>
  );
}

export default App;
