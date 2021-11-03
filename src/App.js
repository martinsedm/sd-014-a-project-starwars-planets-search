import React from 'react';
import './App.css';

import Header from './componets/Header';
import NameSearch from './componets/NameSearch';
import SelectSearch from './componets/SelectSearch';
import Table from './componets/Table';

function App() {
  return (
    <div>
      <Header />
      <NameSearch />
      <SelectSearch />
      <Table />
    </div>

  );
}

export default App;
