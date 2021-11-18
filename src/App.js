import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import PlanetsTable from './components/PlanetsTable';
import Header from './components/Header';

export default function App() {
  return (
    <StarWarsProvider>
      <Header />
      <PlanetsTable />
    </StarWarsProvider>
  );
}
