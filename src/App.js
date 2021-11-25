import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main className="InitialConfigs">
      <StarWarsProvider>
        <Header />
        <Search />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
