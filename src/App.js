import React from 'react';
import './App.css';
import Search from './components/Search';
import TablePlanets from './components/TablePlanets';

function App() {
  return (
    <nav>
      <Search />
      <TablePlanets />
    </nav>
  );
}

export default App;
