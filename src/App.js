import React from 'react';
import PlanetsContextProvider from './Context/PlanetsContextProvider';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <PlanetsContextProvider>
      <main>
        <Header />
        <SearchBar />
        <Table />
      </main>
    </PlanetsContextProvider>
  );
}

export default App;
