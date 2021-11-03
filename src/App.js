import React from 'react';
import Filters from './components/Filters';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Header />
        <Search />
        <Filters />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
