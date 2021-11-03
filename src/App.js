import React from 'react';
import './App.css';
import Search from './components/Search';
import TablePlanets from './components/TablePlanets';
import StarwarsProvider from './Context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <nav>
        <Search />
      </nav>
      <main>
        <TablePlanets />
      </main>
    </StarwarsProvider>
  );
}

export default App;
