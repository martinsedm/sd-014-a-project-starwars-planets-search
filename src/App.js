import React from 'react';
import PlanetsContextProvider from './Context/PlanetsContextProvider';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {
  return (
    <PlanetsContextProvider>
      <main>
        <Header />
        <Table />
      </main>
    </PlanetsContextProvider>
  );
}

export default App;
